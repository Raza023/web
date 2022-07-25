<?php 
// controller part
include("connection.php");



function time_since($since) { 
    $chunks = array( 
        array(60 * 60 * 24 * 365 , 'year'), 
        array(60 * 60 * 24 * 30 , 'month'), 
        array(60 * 60 * 24 * 7, 'week'),
        array(60 * 60 * 24 , 'day'),
        array(60 * 60 , 'hour'),
        array(60 , 'min'),
        array(1, 'sec')
    ); 
    for ($i = 0, $j = count($chunks); $i < $j; $i++)
    {
        $seconds = $chunks[$i][0]; 
        $name = $chunks[$i][1]; 
        $count = floor($since / $seconds); 
        if ($count != 0) {break;} 
    } 
    if( $count == 1){ return $print = '1 '.$name;} 
    else if($count < 1) { return $print = 'just now'; } 
    else { return $print = "$count {$name}s" ;}
}

// function time_since2($since) {
//     $chunks = array(
//         array(60 * 60 * 24 * 365 , 'year'),
//         array(60 * 60 * 24 * 30 , 'month'),
//         array(60 * 60 * 24 * 7, 'week'),
//         array(60 * 60 * 24 , 'day'),
//         array(60 * 60 , 'hour'),
//         array(60 , 'minute'),
//         array(1 , 'second')
//     );

//     for ($i = 0, $j = count($chunks); $i < $j; $i++) {
//         $seconds = $chunks[$i][0];
//         $name = $chunks[$i][1];
//         if (($count = floor($since / $seconds)) != 0) {
//             break;
//         }
//     }

//     $print = ($count == 1) ? '1 '.$name : "$count {$name}s";
//     return $print;
// }

// function timeAgo($timestamp){
//     $datetime1=new DateTime("now");
//     $datetime2=date_create($timestamp);
//     $diff=date_diff($datetime1, $datetime2);
//     $timemsg='';
//     if($diff->y > 0){
//         $timemsg = $diff->y .' year'. ($diff->y > 1?"'s":'');
//     }
//     else if($diff->m > 0){
//      $timemsg = $diff->m . ' month'. ($diff->m > 1?"'s":'');
//     }
//     else if($diff->d > 0){
//      $timemsg = $diff->d .' day'. ($diff->d > 1?"'s":'');
//     }
//     else if($diff->h > 0){
//      $timemsg = $diff->h .' hour'.($diff->h > 1 ? "'s":'');
//     }
//     else if($diff->i > 0){
//      $timemsg = $diff->i .' minute'. ($diff->i > 1?"'s":'');
//     }
//     else if($diff->s > 0){
//      $timemsg = $diff->s .' second'. ($diff->s > 1?"'s":'');
//     }

// $timemsg = $timemsg.' ago';
// return $timemsg;
// }

function displayTweets($type)
{
    global $conn;      //we must have to make our connection global to access it in other functions.

    $whereClause="";

    if($type=='public')
    {
        $whereClause="";
    }
    else if($type=="mytimeline")
    {
        if(array_key_exists("id",$_COOKIE))
        {
            $query = "SELECT * FROM  isfollowing WHERE follower=".mysqli_real_escape_string($conn,$_COOKIE["id"])."";
            $result = mysqli_query($conn,$query);
            // echo $query;
            if($result)
            {
                if(mysqli_num_rows($result)>=1)   //means follows someone.
                {
                    // $row = mysqli_fetch_assoc($result);
                    while($row = mysqli_fetch_assoc($result))
                    {
                        if($whereClause=="")
                        {
                            $whereClause.=" WHERE ";
                        }
                        else
                        {
                            $whereClause.=" OR ";
                        }
                        $whereClause.="userid = ".mysqli_real_escape_string($conn,$row["following"]);
                    }
                }
                else
                {
                    $whereClause.=" WHERE userid = -1 ";
                }
            }
            else
            {
                echo "There was an error in executing this query.";
            }
        }
        else
        {
            $whereClause.=" WHERE userid = -1 ";   //if not logged in.
        }
    }

    if($type=="mytweets")
    {
        if(array_key_exists("id",$_COOKIE))
        {
            $whereClause.=" WHERE userid = ".mysqli_real_escape_string($conn,$_COOKIE["id"])." ";
        }
        else
        {
            $whereClause.=" WHERE userid = -1 ";   //if not logged in.
        }
    }

    if($type=="search")
    {
        echo "<h3>Showing search results for '".$_GET["q"]."'</h3>";

        $whereClause.=" WHERE tweet like '%".mysqli_real_escape_string($conn,$_GET["q"])."%' ";   //if not logged in.
    }

    if(is_numeric($type))
    {
        $userquery = "SELECT * FROM `people` WHERE id = ".mysqli_real_escape_string($conn,$type)." LIMIT 1";
        $userresult = mysqli_query($conn,$userquery);
        if($userresult)
        {
            $user=mysqli_fetch_assoc($userresult);
            echo "<h1>".$user["email"]."'s tweets</h1>";
        }
        $whereClause.=" WHERE userid  = ".mysqli_real_escape_string($conn,$type);
    }

    $query = "SELECT * FROM `tweets`".$whereClause." ORDER BY `datetime` DESC LIMIT 10";
    //echo $query."<br>";
    $result = mysqli_query($conn,$query);
    if($result)
    {
        if(mysqli_num_rows($result)>=1)
        {
            while($row = mysqli_fetch_assoc($result))   //it's the best one and much more easy way to get data.
            {
                $userquery = "SELECT * FROM `people` WHERE id = ".mysqli_real_escape_string($conn,$row["userid"])." LIMIT 1";
                $userresult = mysqli_query($conn,$userquery);
                if($userresult)
                {
                    $user=mysqli_fetch_assoc($userresult);
                    echo "<div style='border: 1px solid grey; border-radius:10px; padding:10px; margin:10px'>";
                        echo "<p><a href='?page=publicprofiles&userid=".$user["id"]."'>".$user["email"]."</a> <span style='color:grey;'>".time_since(time()-strtotime($row['datetime'])+3*60*60)." ago</span></p>";
                        echo "<p>".$row["tweet"]."</p>";
                        $postkarnawalakiId = $row['userid'];

                        if(array_key_exists("email",$_COOKIE))
                        {
                            if($user["email"]!=$_COOKIE["email"])
                            {
                                $followquery = "SELECT * FROM  isfollowing WHERE follower=".mysqli_real_escape_string($conn,$_COOKIE["id"])." AND following=".mysqli_real_escape_string($conn,$row["userid"])." LIMIT 1";
                                $fresult = mysqli_query($conn,$followquery);
                                if($fresult)
                                {
                                    $row = mysqli_fetch_assoc($fresult);
                                    if(mysqli_num_rows($fresult)>=1)   //already follows
                                    {
                                        echo "<p> <a class='toggleFollow' data-userID='".$postkarnawalakiId."' href='#'>Unfollow</a></p>";
                                    }
                                    else //not follows (now follow)
                                    {
                                        echo "<p> <a class='toggleFollow' data-userID='".$postkarnawalakiId."' href='#'>Follow</a></p>";
                                    }
                                }
                                else
                                {
                                    echo "There was an error in executing query.";
                                }
                            }
                        }   
                    echo "</div>";
                }
                else
                {
                    echo "There are no tweets to display.";
                }  
            }
        }
        else
        {
            echo "There are no tweets to display.";
        }
    }
    else
    {
        echo "Error in executing query.";
    }
}

function displaySearchTweets()
{
    echo '<div style="margin-top:10px;">
        <form class="row gy-2 gx-3 align-items-center">
            <input type="hidden" class="form-control" name="page" value="search">      
            <div class="col-auto">
                <input type="text" class="form-control" id="search" name="q" placeholder="search">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Search tweets</button>
            </div>
        </form>
    </div>';
}

function displayTweetBox()
{
    echo '<div style="margin-top:10px;">
        <div id="showTweetResponse"></div>
        <form class="row>
            <div class="col-auto">
                <textarea class="form-control" id="myTextbox"></textarea>
            </div>
            <div style="margin-top:10px;" class="col-auto">
                <button type="submit" class="btn btn-primary" id="postTweetBtn">Post tweet</button>
            </div>
        </form>
    </div>';
}

function displayUsers()
{
    global $conn;
    $query = "SELECT * FROM  people LIMIT 50";
    $result = mysqli_query($conn,$query);

    if($result)
    {
        if(mysqli_num_rows($result)>=1)
        {
            while($row = mysqli_fetch_assoc($result))
            {
                echo "<p><a href='?page=publicprofiles&userid=".$row["id"]."'>".$row["email"]."</a></p>";
            }
        }
        else
        {
            echo "There are currently no users to display.";
        }
    }
    else
    {
        echo "There was an error in executing query."; 
    }
}

?>

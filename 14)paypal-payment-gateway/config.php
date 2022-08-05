<?php
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;

require './autoload.php';

// For test payments we want to enable the sandbox mode. If you want to put live
// payments through then this setting needs changing to `false`.
$enableSandbox = true;

// PayPal settings. Change these to your account details and the relevant URLs
// for your site.
$paypalConfig = [
    'client_id' => 'your_client_id',                                                 //get it from here https://developer.paypal.com/
    'client_secret' => 'your_secret_id',                                             //get it from here https://developer.paypal.com/
    'return_url' => 'https://mywebsitename.com/paypal/response.php',                 //update this
    'cancel_url' => 'https://mywebsitename.com/paypal/payment-cancelled.html'        //update this
];

// Database settings. Change these for your database configuration.
$dbConfig = [
    'host' => 'your_host_name',
    'username' => 'your_user_name',
    'password' => 'your_pswd',
    'name' => 'your_db_name'
];

$apiContext = getApiContext($paypalConfig['client_id'], $paypalConfig['client_secret'], $enableSandbox);

/**
 * Set up a connection to the API
 *
 * @param string $clientId
 * @param string $clientSecret
 * @param bool   $enableSandbox Sandbox mode toggle, true for test payments
 * @return \PayPal\Rest\ApiContext
 */
function getApiContext($clientId, $clientSecret, $enableSandbox = false)
{
    $apiContext = new ApiContext(
        new OAuthTokenCredential($clientId, $clientSecret)
    );

    $apiContext->setConfig([
        'mode' => $enableSandbox ? 'sandbox' : 'live'
    ]);

    return $apiContext;
}
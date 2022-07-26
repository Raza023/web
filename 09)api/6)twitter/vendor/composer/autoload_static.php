<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd0d932e3d36b1e48dd2f6166c2e6adcb
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\CaBundle\\' => 18,
        ),
        'A' => 
        array (
            'Abraham\\TwitterOAuth\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\CaBundle\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/ca-bundle/src',
        ),
        'Abraham\\TwitterOAuth\\' => 
        array (
            0 => __DIR__ . '/..' . '/abraham/twitteroauth/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd0d932e3d36b1e48dd2f6166c2e6adcb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd0d932e3d36b1e48dd2f6166c2e6adcb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd0d932e3d36b1e48dd2f6166c2e6adcb::$classMap;

        }, null, ClassLoader::class);
    }
}

<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit23e63df9f6ad8f6c1df8ebaa8f981bc4
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Models\\' => 7,
        ),
        'C' => 
        array (
            'Controllers\\' => 12,
        ),
        'A' => 
        array (
            'Auth\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Models',
        ),
        'Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Controllers',
        ),
        'Auth\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Helpers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Controllers\\AdminController' => __DIR__ . '/../..' . '/Controllers/AdminController.php',
        'Controllers\\ItemController' => __DIR__ . '/../..' . '/Controllers/ItemController.php',
        'Models\\AdminModel' => __DIR__ . '/../..' . '/Models/AdminModel.php',
        'Models\\ItemModel' => __DIR__ . '/../..' . '/Models/ItemModel.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit23e63df9f6ad8f6c1df8ebaa8f981bc4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit23e63df9f6ad8f6c1df8ebaa8f981bc4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit23e63df9f6ad8f6c1df8ebaa8f981bc4::$classMap;

        }, null, ClassLoader::class);
    }
}

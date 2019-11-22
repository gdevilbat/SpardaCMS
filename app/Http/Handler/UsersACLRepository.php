<?php

namespace App\Http\Handler;

use Alexusmai\LaravelFileManager\Services\ACLService\ACLRepository;

class UsersACLRepository implements ACLRepository
{
    /**
     * Get user ID
     *
     * @return mixed
     */
    public function getUserID()
    {
        return \Auth::id();
    }

    /**
     * Get ACL rules list for user
     *
     * @return array
     */
    public function getRules(): array
    {
        if (\Auth::id() === 1) {
            return $this->getDiskSuperAdminAccess();
        }
        
        return [
            ['disk' => env('FILESYSTEM_DRIVER'), 'path' => '/', 'access' => 1],                                  // main folder - read
            ['disk' => env('FILESYSTEM_DRIVER'), 'path' => 'users', 'access' => 1],                              // only read
            ['disk' => env('FILESYSTEM_DRIVER'), 'path' => 'users/'. \Auth::id(), 'access' => 1],        // only read
            ['disk' => env('FILESYSTEM_DRIVER'), 'path' => 'users/'. \Auth::id() .'/*', 'access' => 2],  // read and write
        ];
    }

    public function getDiskSuperAdminAccess()
    {
    	$disk = array();

    	foreach (array_keys(config('filesystems.disks')) as $key => $value) 
    	{
    		array_push($disk, ['disk' => $value, 'path' => '*', 'access' => 2]);
    	}

    	return $disk;
    }
}
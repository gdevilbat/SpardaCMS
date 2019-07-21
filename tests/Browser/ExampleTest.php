<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(url(action('\Gdevilbat\SpardaCMS\Modules\Core\Http\Controllers\Auth\LoginController@showLoginForm')))
                    ->assertSee('Laravel');
        });
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getTest(){
        $reviews = Test::all();
        return response() -> json($reviews);
    }

    public function createTest(Request $request){

        $test = new Test();
        $test -> serial = $request -> input("serial");
        $test -> name = $request -> input("name");
        $test -> info = $request -> input("info");
        $test -> save();
        return response() ->json("success");

    }
}

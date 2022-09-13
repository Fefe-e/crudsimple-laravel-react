<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Versionado de la API.
Route::prefix('v1')->group(function () {

    //Controlador de productos
    Route::controller(ProductoController::class)->group(function (){

        //Todos los productos
        Route::get('/products', 'index');
        //Un producto en específico
        Route::get('/product/{id}','show');
        //Guardar un producto
        Route::post('/product', 'store');
        //Actualizar un producto
        Route::put('/product/{id}', 'update');
        //Eliminar un producto
        Route::delete('/product/{id}', 'destroy');
    
    });

});
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

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
    //Controlador de documentos
    Route::controller(DocumentController::class)->group(function () {
        //Todos los documentos
        Route::get('/documents', 'index');
        //Un documento en específico
        Route::get('/document/{id}', 'show');
        //Guardar un documento
        Route::post('/document', 'store');
        //Actualizar un documento
        Route::put('/document/{id}', 'update');
        //Eliminar un documento
        Route::delete('/document/{id}', 'destroy');
    });
});

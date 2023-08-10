<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Document;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Date;


class DocumentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    public function index()
    {
        // Devolverá todos los productos.
        // return "Mostrando todos los productos de la base de datos.";
        // Se debería devolver un objeto con una propiedad como mínimo data y el array de resultados en esa propiedad.
        // A su vez también es necesario devolver el código HTTP de la respuesta.

        $documents = Document::all();

        return response()->json(['status' => 'ok', 'data' => $documents], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        //
        // return "Se muestra Producto con id: $id";
        // Buscamos un producto por el id.
        //$producto = $this->productos->obtenerProducto($id);
        $document = Document::find($id);

        // Si no existe ese producto devolvemos un error.
        if (!$document) {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No existe un documento con ese id.'])], 404);
        }

        return response()->json(['status' => 'ok', 'data' => $document], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        try {
            $document = new Document();
            $document->mister = $request->mister;
            $document->address = $request->address;
            $document->locality = $request->locality;
            $document->amount = $request->amount;
            $document->concept = $request->concept;
            $document->operator = $request->operator;
            $document->services = $request->services;
            $document->document_date = $request->documentdate;
            $document->departure_date = $request->departuredate;
            $document->destination = $request->destination;
            $document->cash_checknumber = $request->cashchecknumber;
            $document->bank = $request->bank;
            $document->total = $request->total;
            $document->comments = $request->comments;
            $document->save();

            return response()->json(['status' => 'ok', 'data' => $document], 200);
        } catch (ModelNotFoundException $e) {

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $document = Document::findOrFail($id);
            $document->mister = $request->mister;
            $document->address = $request->address;
            $document->locality = $request->locality;
            $document->amount = $request->amount;
            $document->concept = $request->concept;
            $document->operator = $request->operator;
            $document->services = $request->services;
            $document->document_date = $request->documentdate;
            $document->departure_date = $request->departuredate;
            $document->destination = $request->destination;
            $document->cash_checknumber = $request->cashchecknumber;
            $document->bank = $request->bank;
            $document->total = $request->total;
            $document->comments = $request->comments;
            $document->save();

            return response()->json(['status' => 'ok', 'data' => $document], 200);
        } catch (ModelNotFoundException $e) {

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $document = Document::destroy($id);

        return response()->json(['status' => 'ok', 'data' => $document], 200);
    }
}

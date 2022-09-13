<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Producto;

class ProductoController extends Controller
{   

    protected $productos;
    
    public function __construct(Producto $productos)
    {
        $this->productos = $productos;
    }

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
        
        $productos = Producto::all();

        return response()->json(['status'=>'ok','data'=>$productos], 200);

        /* $productos = $this->productos->obtenerProductos();
		return response()->json(['status'=>'ok','data'=>$productos], 200); */
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
        $producto = Producto::find($id);

		// Si no existe ese producto devolvemos un error.
		if (!$producto)
		{
			// Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
			// En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No existe un producto con ese id.'])],404);
		}

		return response()->json(['status'=>'ok','data'=>$producto],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->name = $request->name;
        $producto->description = $request->description;
        $producto->measurement_unit = $request->measurement_unit;
        $producto->status = $request->status;
      
        $producto->save();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $producto = Producto::findOrFail($request->id);
        $producto->name = $request->name;
        $producto->description = $request->description;
        $producto->measurement_unit = $request->measurement_unit;
        $producto->status = $request->status;

        $producto->save();

        return response()->json(['status'=>'ok','data'=>$producto],200);
        //return $producto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto = Producto::destroy($id);

        return response()->json(['status'=>'ok','data'=>$producto],200);
        //return $producto;
    }
}

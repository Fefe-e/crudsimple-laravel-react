<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{   
  //Nombre de la tabla en db, si no ponemos nada por defecto si el modelo se llama Producto --> la tabla tiene que ser productos en plural
  protected $table = 'producto';
  
  //Por defecto los campos se tratan como protegidos y se debe indicar cuales pueden ser llenados de esta forma.
  //protected $fillable = ['name', 'description', 'measurement_unit', 'status'];


  //Los campos definidos acá no pueden ser llenados usando Mass Assignment, por lo cual nunca debería enviarse un Input::get() o cualquier otro tipo de datos o arreglo proveniente de un controlador manipulable por un usuario.
  //protected $guarded = ['id'];  

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
  //Nombre de la tabla en db, si no ponemos nada por defecto si el modelo se llama Producto --> la tabla tiene que ser productos en plural
  protected $table = 'documents';

  protected $appends = ['document_date_formatted'];

  //Por defecto los campos se tratan como protegidos y se debe indicar cuales pueden ser llenados de esta forma.
  //protected $fillable = ['name', 'description', 'measurement_unit', 'status'];


  //Los campos definidos acá no pueden ser llenados usando Mass Assignment, por lo cual nunca debería enviarse un Input::get() o cualquier otro tipo de datos o arreglo proveniente de un controlador manipulable por un usuario.
  //protected $guarded = ['id'];  

  // Accessor para el campo document_date_formatted
  public function getDocumentDateFormattedAttribute()
  {
    if (!empty($this->attributes['document_date'])) {
      // Convierte la fecha al formato d/m/Y al acceder al atributo
      return \Carbon\Carbon::createFromFormat('Y-m-d', $this->attributes['document_date'])->format('d/m/Y');
    } else {
      return null;
    }
  }
}

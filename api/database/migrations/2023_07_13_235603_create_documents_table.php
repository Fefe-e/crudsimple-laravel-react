<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('mister')->nullable();
            $table->string('address')->nullable();
            $table->string('locality')->nullable();
            $table->string('amount')->nullable();
            $table->string('concept')->nullable();
            $table->string('operator')->nullable();
            $table->string('services')->nullable();
            $table->date('document_date');
            $table->string('departure_date')->nullable();
            $table->string('destination')->nullable();
            $table->string('cash_checknumber')->nullable();
            $table->string('bank')->nullable();
            $table->string('total')->nullable();
            $table->string('comments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDesa extends Model {    
     /**
     * nama tabel model ini.
     *
     * @var string
     */
    protected $table = 'usersdesa';
    /**
     * primary key tabel ini.
     *
     * @var string
     */
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 
        'user_id', 
        'kecamatan_id',        
        'nama_kecamatan',        
        'desa_id',        
        'nama_desa',        
    ];
    /**
     * enable auto_increment.
     *
     * @var string
     */
    public $incrementing = true;
    /**
     * activated timestamps.
     *
     * @var string
     */
    public $timestamps = true;
}
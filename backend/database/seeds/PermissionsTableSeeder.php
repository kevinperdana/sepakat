<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement('DELETE FROM permissions');
        \DB::statement('ALTER TABLE permissions AUTO_INCREMENT = 1;');

        \DB::table('permissions')->insert([
            'name'=>"DASHBOARD_SHOW",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);  
        
        //dmaster
        \DB::table('permissions')->insert([
            'name'=>"DMASTER-GROUP",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);       
        
        //system
        \DB::table('permissions')->insert([
            'name'=>"SYSTEM-SETTING-GROUP",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);

        \DB::table('permissions')->insert([
            'name'=>"SYSTEM-USERS-GROUP",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);                        

        $modules = [             
            'DMASTER-TA',     
            'DMASTER-FAKULTAS',     
            'DMASTER-PRODI',     
            'DMASTER-KELAS',     
            'DMASTER-RUANGAN-KELAS',                 
            
            'SPMB-PMB',                 
            'SPMB-PMB-FORMULIR-PENDAFTARAN',     
            'SPMB-PMB-PERSYARATAN',                                
            'SPMB-PMB-SOAL',     
            'SPMB-PMB-JADWAL-UJIAN',     
            'SPMB-PMB-PASSING-GRADE',     
            'SPMB-PMB-UJIAN-ONLINE',     
            'SPMB-PMB-NILAI-UJIAN',   
            'SPMB-PMB-KELULUSAN-UJIAN',   
            
            'KEUANGAN-STATUS-TRANSAKSI',                 
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE',                 
            'KEUANGAN-METODE-TRANSFER-BANK',                 
            'KEUANGAN-METODE-IB',                 
            'KEUANGAN-TRANSAKSI',                 
            'KEUANGAN-KONFIRMASI-PEMBAYARAN',                                                  
            
            'AKADEMIK-MATAKULIAH',
            'AKADEMIK-DULANG-BARU',
            'AKADEMIK-DULANG-LAMA',
            'AKADEMIK-DULANG-AKTIF',
            'AKADEMIK-DULANG-CUTI',
            'AKADEMIK-DULANG-DO',
            'AKADEMIK-DULANG-NON-AKTIF',
            'AKADEMIK-DULANG-LULUS',
            'AKADEMIK-DULANG-KELUAR',

            'AKADEMIK-PERKULIAHAN-PENYELENGGARAAN',
            'AKADEMIK-PERKULIAHAN-KRS',
            'AKADEMIK-PERKULIAHAN-PKRS',
            
            'SYSTEM-SETTING-PERMISSIONS',
            'SYSTEM-SETTING-ROLES',
            'SYSTEM-SETTING-IDENTITAS-DIRI',
            'SYSTEM-SETTING-VARIABLES',
            'SYSTEM-USERS-SUPERADMIN',
            'SYSTEM-USERS-AKADEMIK',
            'SYSTEM-USERS-PROGRAM-STUDI',
            'SYSTEM-USERS-PMB',
            'SYSTEM-USERS-KEUANGAN',
            'SYSTEM-USERS-PERPUSTAKAAN',
            'SYSTEM-USERS-LPPM',
            'SYSTEM-USERS-PUSLAHTA',
            'SYSTEM-USERS-DOSEN',
            'SYSTEM-USERS-DOSEN-WALI',
            'SYSTEM-USERS-MAHASISWA',
            'SYSTEM-USERS-MAHASISWA-BARU',
            'SYSTEM-USERS-ALUMNI',
            'SYSTEM-USERS-ORANG-TUA-WALI',  
            
            'SYSTEM-MIGRATION'
        ];
        $records=[];
        foreach($modules as $v)
        {
            $records=array(
                ['name'=>"{$v}_BROWSE",'guard_name'=>'api','created_at'=>Carbon::now(),'updated_at'=>Carbon::now()],
                ['name'=>"{$v}_SHOW",'guard_name'=>'api','created_at'=>Carbon::now(),'updated_at'=>Carbon::now()],
                ['name'=>"{$v}_STORE",'guard_name'=>'api','created_at'=>Carbon::now(),'updated_at'=>Carbon::now()],
                ['name'=>"{$v}_UPDATE",'guard_name'=>'api','created_at'=>Carbon::now(),'updated_at'=>Carbon::now()],
                ['name'=>"{$v}_DESTROY",'guard_name'=>'api','created_at'=>Carbon::now(),'updated_at'=>Carbon::now()]                
            );            
            \DB::table('permissions')->insert($records);
        }    
        
        \DB::table('permissions')->insert([
            'name'=>"USER_STOREPERMISSIONS",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);                
        \DB::table('permissions')->insert([
            'name'=>"USER_REVOKEPERMISSIONS",
            'guard_name'=>'api',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();                
    }
}

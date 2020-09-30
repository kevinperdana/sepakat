<?php

namespace App\Http\Controllers\Report;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Konsultasi\KonsultasiKegiatanModel;

use Ramsey\Uuid\Uuid;

use mpdf;

class ReportKegiatanController extends Controller
{
    public function index ()
    {
       
        $daftar_kegiatan=KonsultasikegiatanModel::select(\DB::raw('
                                                        kegiatan_id,
                                                        nama_kegiatan,
                                                        pemohon,                                                                                                                
                                                        nama_jenis,
                                                        id_status,
                                                        created_at,
                                                        updated_at                                                        
                                                    '))                                                                                                        
                                                    ->get();
    
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',
                                    'daftar_kegiatan'=>$daftar_kegiatan,
                                    'message'=>'Fetch data daftar kegiatan berhasil diperoleh.'
                                ],200);
    }
    public function printpdf (Request $request)
    {
        $this->validate($request, [
            'kegiatan_id'=>'required|exists:kegiatan,kegiatan_id',                                    
        ]);
        $kegiatan_id=$request->input('kegiatan_id');

        $data = [
			'foo' => 'bar'
		];
        $pdf = \Meneses\LaravelMpdf\Facades\LaravelMpdf::loadView('pdf.document', $data);
        $file_pdf=\App\Helpers\Helper::public_path('exported/pdf/')."/$kegiatan_id.pdf";        
        $pdf->save($file_pdf);

        $pdf_file="storage/exported/pdf/$kegiatan_id.pdf";

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',
                                    'file_pdf'=>$file_pdf,
                                    'pdf_file'=>$pdf_file                                    
                                ],200);
    }
}
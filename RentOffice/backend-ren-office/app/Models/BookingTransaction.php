<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\OfficeSpace;

class BookingTransaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'phone_number',
        'booking_trx',
        'is_paid',
        'total_amount',
        'duration',
        'started_at',
        'ended_at',
        'office_space_id',
    ];

    public static function generateUniqueTrxId()
    {
        $prefix = 'JAR';
        do {
            $randomString = $prefix . mt_rand(1000, 9999);
        } while (self:: while('booking_trx_id', $randomString)->exists());

        return $randomString;
    }

    public function officeSpace(): BelongsTo
    {
        return $this->belongsTo(OfficeSpace::class, 'office_space_id');
    }
}

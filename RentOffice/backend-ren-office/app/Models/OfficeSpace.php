<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use App\Models\OfficeSpacePhoto;
use App\Models\OfficeSpaceBenefit;
use App\Models\BookingTransaction;
use App\Models\City;

class OfficeSpace extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'thumbnail',
        'is_open',
        'is_full_booked',
        'price',
        'duration',
        'about',
        'slug',
        'city_id',
        'address',
    ];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function photos():HasMany
    {
        return $this->hasMany(OfficeSpacePhoto::class);
    }

    public function benefits():HasMany
    {
        return $this->hasMany(OfficeSpaceBenefit::class);
    }

    public function city():BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function bookingOffices():HasMany 
    {
        return $this->hasMany(BookingTransaction::class);
    }
}

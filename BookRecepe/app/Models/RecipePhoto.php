<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class RecipePhoto extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'photo',
        'recipe_id',
    ];


    /**
     * Get the recipe that owns the RecipePhoto
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }
}

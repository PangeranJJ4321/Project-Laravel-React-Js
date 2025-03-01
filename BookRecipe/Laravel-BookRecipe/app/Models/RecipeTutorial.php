<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Recipe;

class RecipeTutorial extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'recipe_id',
    ];

    /**
     * Get the recipe that owns the RecipeTutorial
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }
}

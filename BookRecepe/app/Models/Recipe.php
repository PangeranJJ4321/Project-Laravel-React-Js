<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Recipe extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'thumbnail',
        'about',
        'url_file',
        'url_video',
        'category_id',
        'author_id',
    ];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
    // relasi

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Get all of the photos for the Recipe
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function photos(): HasMany
    {
        return $this->hasMany(RecipePhoto::class, 'recipe_id');
    }

    public function tutorials(): HasMany
    {
        return $this->hasMany(RecipeTutorial::class, 'recipe_id');
    }


    /**
     * Get the author that owns the Recipe
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(RecipeAuthor::class, 'author_id');
    }

    public function recipeIngredients(): HasMany
    {
        return $this->hasMany(RecipeIngredient::class, 'recipe_id');
    }
}

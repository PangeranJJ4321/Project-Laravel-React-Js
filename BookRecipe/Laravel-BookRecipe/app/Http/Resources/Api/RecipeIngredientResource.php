<?php

namespace App\Http\Resources\Api;

use App\Http\Resources\Api\IngredientResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeIngredientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'ingredient' => new IngredientResource($this ->whenLoaded('ingredient')),
        ];
    }
}

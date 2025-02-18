<?php

namespace App\Http\Middleware;

use App\Models\ApiKey;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     public function handle(Request $request, Closure $next): Response
     {
         $api_key = $request->header('dapurpangeran');
     
         // Mengecek apakah API key ada dan valid di database
         if (!$api_key || !ApiKey::where('key', $api_key)->exists()) {
             return response()->json(['message' => 'Unauthorized'], 401);
         }
     
         return $next($request);
     }
     

    
}

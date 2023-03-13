<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function index()
    {
        return Inertia::render('Cars/Index',[
            'cars'=>Car::with('user:id,name')->latest()->get()
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'=>'required|string|max:100',
            'body'=> 'required|string|max:255',
        ]);

        $request->user()->cars()->create($validated);
        return redirect(route('cars.index'));
    }
    public function update(Request $request, Car $car)
    {
        //
    }
    public function destroy(Car $car)
    {
        //
    }
}

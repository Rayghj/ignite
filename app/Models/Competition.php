<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['name', 'description'])]
class Competition extends Model
{
    /**
     * @return HasMany<TeamData, $this>
     */
    public function teamData(): HasMany
    {
        return $this->hasMany(TeamData::class);
    }
}

<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        // pending task =======
        $total_pending_task = Task::query()->where('status', 'pending')->count();
        $my_pending_task = Task::query()->where('status', 'pending')->where('assigned_user_id', $user->id)->count();
        
        // inprogress task =======
        $total_in_progress_task = Task::query()->where('status', 'in_progress')->count();
        $my_in_progress_task = Task::query()->where('status', 'in_progress')->where('assigned_user_id', $user->id)->count();
        
        // completed task =======
        $total_completed_task = Task::query()->where('status', 'completed')->count();
        $my_completed_task = Task::query()->where('status', 'completed')->where('assigned_user_id', $user->id)->count();
        
        $ongoing_tasks = Task::query()->whereIn('status', ['pending', 'in_progress'])->where('assigned_user_id', $user->id)->limit(10)->get();
        $active_tasks = TaskResource::collection($ongoing_tasks);

        return inertia('Dashboard', compact("active_tasks", "total_pending_task","my_pending_task","total_in_progress_task","my_in_progress_task","total_completed_task","my_completed_task"));
    }
}

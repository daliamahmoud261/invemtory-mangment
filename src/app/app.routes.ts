import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadComponent: () =>
            import(
                '../app/components/dashboard/dashboard.component'
            ).then((c) => c.DashboardComponent),
    },
    {
        path: 'item',
        loadComponent: () =>
            import(
                '../app/components/dashboard/inventory-item/inventory-item.component'
            ).then((c) => c.InventoryItemComponent),
    },
    {
        path: '**',
        redirectTo: ''
    }
];

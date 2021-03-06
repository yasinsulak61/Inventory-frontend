import React from 'react';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;



const UIBasicButton = React.lazy(() => import('../components/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('../components/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('../components/UIElements/Basic/BreadcrumbPagination'));
const UIBasicCollapse = React.lazy(() => import('../components/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('../components/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('../components/UIElements/Basic/Typography'));
const FormsElements = React.lazy(() => import('../components/Forms/FormsElements'));
const BootstrapTable = React.lazy(() => import('../components/Tables/BootstrapTable'));
const Nvd3Chart = React.lazy(() => import('../components/Charts/Nvd3Chart'));
const GoogleMap = React.lazy(() => import('../components/Maps/GoogleMap'));
const OtherSamplePage = React.lazy(() => import('../components/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('../components/Other/Docs'));
const DashboardDefault = React.lazy(() => import('../components/Dashboard/Default'));

const routes = [
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
];

export default routes;
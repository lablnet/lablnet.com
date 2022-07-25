"use strict";
exports.__esModule = true;
var routes = [
    {
        path: '/',
        name: 'Home',
        component: function () { return Promise.resolve().then(function () { return require('../views/Home.vue'); }); },
        meta: {
            title: "Home "
        }
    },
    {
        path: '/quotes',
        name: 'Quotes',
        component: function () { return Promise.resolve().then(function () { return require('../views/Quotes.vue'); }); },
        meta: {
            title: "Quotes"
        }
    },
    {
        path: '/work/resourcesr',
        name: 'ResourcesR',
        component: function () { return Promise.resolve().then(function () { return require('../views/work/ResourcesR.vue'); }); },
        meta: {
            title: "ResourcesR"
        }
    },
    {
        path: '/work/alphasofthub',
        name: 'AlphaSoftHub',
        component: function () { return Promise.resolve().then(function () { return require('../views/work/Alphasofthub.vue'); }); },
        meta: {
            title: "AlphaSoftHub"
        }
    },
    {
        path: '/work/zest',
        name: 'Zest',
        component: function () { return Promise.resolve().then(function () { return require('../views/work/Zest.vue'); }); },
        meta: {
            title: "Zest Framework"
        }
    },
    {
        path: '/work/projects',
        name: 'Projects',
        component: function () { return Promise.resolve().then(function () { return require('../views/work/Projects.vue'); }); },
        meta: {
            title: "More Projects"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "404",
        component: function () { return Promise.resolve().then(function () { return require('../views/site/404.vue'); }); },
        meta: {
            title: "404 Not Found"
        }
    },
];
exports["default"] = routes;

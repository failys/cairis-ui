/*  Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

    Authors: Shamal Faily */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/asset/:objectName',
      name: 'asset',
      component: () => import('./views/AssetView.vue'),
      props: true
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('./views/Assets.vue')
    },
    {
      path: '/assetmodel',
      name: 'assetmodel',
      component: () => import('./views/AssetModelView.vue')
    },
    {
      path: '/attacker/:objectName',
      name: 'attacker',
      component: () => import('./views/AttackerView.vue'),
      props: true
    },
    {
      path: '/attackers',
      name: 'attackers',
      component: () => import('./views/Attackers.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/counteremeasures',
      name: 'countermeasures',
      component: () => import('./views/Countermeasures.vue')
    },
    {
      path: '/dependencies',
      name: 'dependencies',
      component: () => import('./views/Dependencies.vue')
    },
    {
      path: '/dataflowdiagram',
      name: 'dataflowdiagram',
      component: () => import('./views/DataFlowDiagramView.vue')
    },
    {
      path: '/goalmodel',
      name: 'goalmodel',
      component: () => import('./views/GoalModelView.vue')
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('./views/Goals.vue')
    },
    {
      path: '/goal/:objectName',
      name: 'goal',
      component: () => import('./views/GoalView.vue'),
      props: true
    },
    {
      path: '/obstacles',
      name: 'obstacles',
      component: () => import('./views/Obstacles.vue')
    },
    {
      path: '/personas',
      name: 'personas',
      component: () => import('./views/Personas.vue')
    },
    {
      path: '/persona/:objectName',
      name: 'persona',
      component: () => import('./views/PersonaView.vue'),
      props: true
    },
    {
      path: '/requirements',
      name: 'requirements',
      component: () => import('./views/Requirements.vue')
    },
    {
      path: '/requirement/:objectName',
      name: 'requirement',
      component: () => import('./views/RequirementView.vue'),
      props: true
    },
    {
      path: '/responses',
      name: 'responses',
      component: () => import('./views/Responses.vue')
    },
    {
      path: '/riskmodel',
      name: 'riskmodel',
      component: () => import('./views/RiskModelView.vue')
    },
    {
      path: '/risks',
      name: 'risks',
      component: () => import('./views/Risks.vue')
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import('./views/Roles.vue')
    },
    {
      path: '/roles/:objectName',
      name: 'role',
      component: () => import('./views/RoleView.vue'),
      props: true
    },
    {
      path: '/securitypatterns',
      name: 'securitypatterns',
      component: () => import('./views/SecurityPatterns.vue')
    },
    {
      path: '/threats',
      name: 'threats',
      component: () => import('./views/Threats.vue')
    },
    {
      path: '/usecases',
      name: 'usecases',
      component: () => import('./views/UseCases.vue')
    },
    {
      path: '/vulnerabilities',
      name: 'vulnerabilities',
      component: () => import('./views/Vulnerabilities.vue')
    },
    {
      path: '/vulnerabilities/:objectName',
      name: 'vulnerability',
      component: () => import('./views/VulnerabilityView.vue'),
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue')
    }
  ]
})


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

const objectsViewData = { 

architecturalpattern : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Architectural patterns', to: {name: 'objectsview', params : {dimension: 'architecturalpattern'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name'},
    'theAttackSurfaceMetric.theInterfacesDER' : {label : 'Interfaces DER'},
    'theAttackSurfaceMetric.theChannelsDER' : {label : 'Channels DER'},
    'theAttackSurfaceMetric.theUntrustedSurfaceDER' : {label : 'Untrusted Surface DER'},
  },
  theGetUrl : '/api/architectural_patterns',
  theDelUrl : '/api/architectural_patterns/name/'
},
asset : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Assets', to: {name: 'objectsview', params : {dimension: 'asset'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Asset', sortable: true },
    theType : {label : 'Type', sortable: true},
    postaction : {label : ''}
  },
  theGetUrl : '/api/assets/summary',
  theDelUrl : '/api/assets/name/'
},
assetassociation : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Asset associations', to: {name: 'objectsview', params : {dimension: 'assetassociation'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theEnvironmentName : {label : 'Environment', sortable: true},
    theHeadAsset : {label : 'Head', sortable: true},
    theHeadNavigation : {label : 'Nav', sortable: true},
    theHeadType : {label : 'Type', sortable: true},
    theHeadMultiplicity : {label : 'Nry', sortable: true},
    theHeadRole : {label : 'Role', sortable: true},
    theTailRole : {label : 'Role', sortable: true},
    theTailMultiplicity : {label : 'Nry', sortable: true},
    theTailType : {label : 'Type', sortable: true},
    theTailNavigation : {label : 'Nav', sortable: true},
    theTailAsset : {label : 'Head', sortable: true}
  },
  theGetUrl : '/api/assets/association',
  theDelUrl : '/api/assets/association/environment/'
},
attacker : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Attackers', to: {name: 'objectsview', params : {dimension: 'attacker'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Attacker', sortable: true},
    theDescription : {label : 'Description'}
  },
  theGetUrl : '/api/attackers/summary',
  theDelUrl : '/api/attackers/name/'
},
countermeasure : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Countermeasures', to: {name: 'objectsview', params : {dimension: 'countermeasure'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theType : {label : 'Type', sortable: true}
  },
  theGetUrl : '/api/countermeasures',
  theDelUrl : '/api/countermeasures/name/'
},
dependency : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Dependencies', to: {name: 'objectsview', params: {dimension: 'dependency'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theEnvironmentName : {label : 'Environment', sortable: true},
    theDepender : {label : 'Depender', sortable: true},
    theDependee : {label : 'Dependee', sortable: true},
    theDependencyType : {label : 'Type', sortable: true},
    theDependency : {label : 'Dependency', sortable: true}
  },
  theGetUrl : '/api/dependencies',
  theDelUrl : '/api/dependencies/environment/'
},
domainproperty: {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Domain properties', to: {name: 'objectsview', params : {dimension: 'domainproperty'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true },
    theType : {label : 'Type', sortable: true},
    postaction : {label : ''}
  },
  theGetUrl : '/api/domainproperties',
  theDelUrl : '/api/domainproperties/name/'
},
environment : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Environments', to: {name: 'objectsview', params : {dimension: 'environment'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theDescription : {label : 'Description'}
  },
  theGetUrl : '/api/environments',
  theDelUrl : '/api/environments/name/'
},
goal : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Goals', to: {name: 'objectsview', params : {dimension: 'goal'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theOriginator : {label : 'Originator', sortable: true},
    theStatus : {label : 'Status'}
  },
  theGetUrl : '/api/goals/summary',
  theDelUrl : '/api/goals/name/'
},
kaosassociation : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'KAOS associations', to: {name: 'objectsview', params : {dimension: 'kaosassociation'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theEnvironmentName : {label : 'Environment', sortable: true},
    theGoal : {label : 'Goal', sortable: true},
    theGoalDimension : {label : 'Dimension', sortable: true},
    theAssociationType : {label : 'Association', sortable: true},
    theSubGoal : {label : 'Sub Goal', sortable: true},
    theSubGoalDimension : {label : 'Dimension', sortable: true}
  },
  theGetUrl : '/api/goals/association',
  theDelUrl : '/api/goals/association/environment/'
},
obstacle : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Obstacles', to: {name: 'objectsview', params : {dimension: 'obstacle'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theOriginator : {label : 'Originator', sortable: true}
  },
  theGetUrl : '/api/obstacles/summary',
  theDelUrl : '/api/obstacles/name/'
},
persona : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Personas', to: {name: 'objectsview', params : {dimension: 'persona'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theType : {label : 'Type', sortable: true}
  },
  theGetUrl : '/api/personas/summary',
  theDelUrl : '/api/personas/name/'
},
response : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Responses', to: {name: 'objectsview', params : {dimension: 'response'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theResponseType : {label : 'Type', sortable: true},
    generategoalaction : {label : ''}
  },
  theGetUrl : '/api/responses',
  theDelUrl : '/api/responses/name/'
},
requirement : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Requirements', to: {name: 'objectsview', params : {dimension: 'requirement'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Requirement', sortable: true},
    theDescription : {label : 'Description'},
    thePriority : {label : 'Priority', sortable: true},
    theRationale : {label : 'Rationale'},
    theFitCriterion : {label : 'Fit Criterion'},
    theOriginator : {label : 'Originator', sortable: true},
    theType : {label : 'Type', sortable: true},
    pretaction : {label: ''},
    postaction : {label : ''}
  },
  theGetUrl : '',
  theDelUrl : '/api/requirements/name/'
},
risk : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Risks', to: {name: 'objectsview', params : {dimension: 'risk'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theVulnerability : {label : 'Vulnerability', sortable: true},
    theThreat : {label : 'Threat', sortable: true}
  },
  theGetUrl : '/api/risks/summary',
  theDelUrl : '/api/risks/name/'
},
role : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Roles', to: {name: 'objectsview', params : {dimension: 'role'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Role', sortable: true},
    theType : {label : 'Type', sortable: true},
    theDescription : {label : 'Description'},
    pretaction : {label: ''}
  },
  theGetUrl : '/api/roles',
  theDelUrl : '/api/roles/name/'
},
securitypattern : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Security patterns', to: {name: 'objectsview', params: {dimension: 'securitypattern'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', }
  },
  theGetUrl : '/api/security_patterns',
  theDelUrl : '/api/security_patterns/name/'
},
task : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Tasks', to: {name: 'objectsview', params: {dimension: 'task'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theObjective : {label : 'Objective'},
    pretaction : {label: ''},
    postaction : {label : ''}
  },
  theGetUrl : '/api/tasks',
  theDelUrl : '/api/tasks/name/'
},
threat : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Threats', to: {name: 'objectsview', params: {dimension: 'threat'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theType : {label : 'Type', sortable: true}
  },
  theGetUrl : '/api/threats/summary',
  theDelUrl : '/api/threats/name/'
},
usecase : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Use cases', to: {name: 'objectsview', params: {dimension: 'usecase'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theDescription : {label : 'Description'},
    pretaction : {label: ''},
    postaction : {label : ''}
  },
  theGetUrl : '/api/usecases/summary',
  theDelUrl : '/api/usecases/name/'
},
vulnerability : {
  bcItems : [{text: 'Home', to: {name: 'home'}},{text: 'Vulnerabilities', to: {name: 'objectsview', params: {dimension: 'vulnerability'}}}],
  objectsFields : {
    objectsactions : {label : ''},
    theName : {label : 'Name', sortable: true},
    theType : {label : 'Type', sortable: true},
    pretaction : {label: ''}
  },
  theGetUrl : '/api/vulnerabilities',
  theDelUrl : '/api/vulnerabilities/name/'
}

}

export default objectsViewData;
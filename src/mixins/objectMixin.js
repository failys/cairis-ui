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

import axios from 'axios';
import EventBus from '../utils/event-bus';
import Vue from 'vue';

export default {
  computed : {
    environmentNames() {
      return this.objt.theEnvironmentProperties.length > 0 ? this.objt.theEnvironmentProperties.map(prop => prop.theEnvironmentName) : [];
    },
    environmentName() {
      return this.objt.theEnvironmentProperties.length > 0 ? this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName : '' ;
    },
  },
  methods : {
    addEnvironmentProperty(envProp) {
      this.objt.theEnvironmentProperties.push(envProp);
      this.envPropIndex = this.objt.theEnvironmentProperties.length - 1;
    },
    deleteEnvironment(envName) {
      this.objt.theEnvironmentProperties = this.objt.theEnvironmentProperties.filter(envProp => envProp.theEnvironmentName != envName);
    },
    addEnvironment(evt) {
      evt.preventDefault();
      this.$refs.environmentDialog.show();  
    },
    commitObject(updateUrl,createUrl,dimRoute) {
      if (this.commitLabel == 'Update') {
        axios.put(updateUrl,{
          session_id : this.$store.state.session,
          object : this.objt
        })
        .then(response => {
          EventBus.$emit('operation-success',response.data.message)
          this.$router.push({ name: dimRoute})
        })
        .catch((error) => {
          EventBus.$emit('operation-failure',error)
        })
      }
      else {
        axios.post(createUrl,{
          session_id : this.$store.state.session,
          object : this.objt
        })
        .then(response => {
          EventBus.$emit('operation-success',response.data.message)
          this.$router.push({ name: dimRoute})
        })
        .catch((error) => {
          EventBus.$emit('operation-failure',error)
        })
      }
    }
  }
}
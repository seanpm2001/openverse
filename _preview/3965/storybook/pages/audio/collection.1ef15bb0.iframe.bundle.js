(window.webpackJsonp=window.webpackJsonp||[]).push([[190,14],{"./src/components/VSearchResultsGrid/VCollectionResults.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),media=__webpack_require__("./src/constants/media.ts"),emits=__webpack_require__("./src/types/emits.ts"),VCollectionHeader=__webpack_require__("./src/components/VCollectionHeader/VCollectionHeader.vue"),VMediaCollection=__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VSearchResultsGrid_VCollectionResultsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VCollectionResults",components:{VLoadMore:VLoadMore.default,VMediaCollection:VMediaCollection.default,VCollectionHeader:VCollectionHeader.default},props:{collectionParams:{type:Object,required:!0},collectionLabel:{type:String,required:!0},results:{type:Object,required:!0},isFetching:{type:Boolean,required:!0},searchTerm:{type:String,required:!0}},emits:{"load-more":Object(emits.a)()},methods:{isSupportedMediaType:media.j}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VCollectionResultsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VMediaCollection",{attrs:{results:_vm.results,"is-fetching":_vm.isFetching,"search-term":_vm.searchTerm,"collection-label":_vm.collectionLabel,kind:"collection"},scopedSlots:_vm._u([{key:"header",fn:function fn(){return[_vm.isSupportedMediaType(_vm.results.type)?_c("VCollectionHeader",{staticClass:"mb-2 md:mb-3",attrs:{"media-type":_vm.results.type,"collection-params":_vm.collectionParams}}):_vm._e()]},proxy:!0},{key:"footer",fn:function fn(){return[_c("footer",{staticClass:"mb-6 mt-4 lg:mb-10"},[_c("VLoadMore",{staticClass:"mb-4",attrs:{"search-type":_vm.results.type,kind:"collection","search-term":_vm.searchTerm,"is-fetching":_vm.isFetching},on:{"load-more":function loadMore($event){return _vm.$emit("load-more")}}})],1)]},proxy:!0}])})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCollectionHeader:__webpack_require__("./src/components/VCollectionHeader/VCollectionHeader.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default,VMediaCollection:__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCollectionResults",exportName:"default",description:"",tags:{},props:[{name:"collectionParams",type:{name:"CollectionParams"},required:!0},{name:"collectionLabel",type:{name:"string"},required:!0},{name:"results",type:{name:"Results"},required:!0},{name:"isFetching",type:{name:"boolean"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0}],events:[{name:"load-more"}]}},"./src/composables/use-collection-meta.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useCollectionMeta}));var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),_stores_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stores/provider.ts"),useCollectionMeta=function useCollectionMeta(_ref){var collectionParams=_ref.collectionParams,mediaType=_ref.mediaType,i18n=_ref.i18n;return{pageTitle:Object(vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){var params=collectionParams.value;if(params){if("creator"===params.collection)return"".concat(params.creator," | Openverse");if("source"===params.collection){var sourceName=Object(_stores_provider__WEBPACK_IMPORTED_MODULE_1__.a)().getProviderName(params.source,mediaType);return"".concat(i18n.t("collection.pageTitle.source.".concat(mediaType),{source:sourceName})," | Openverse")}if("tag"===params.collection)return"".concat(i18n.t("collection.pageTitle.tag.".concat(mediaType),{tag:params.tag})," | Openverse")}return"Openly Licensed Images, Audio and More | Openverse"}))}}},"./src/pages/audio/collection.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist_runtime=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),middleware_collection=__webpack_require__("./src/middleware/collection.ts"),search=__webpack_require__("./src/stores/search.ts"),stores_media=__webpack_require__("./src/stores/media/index.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),use_collection_meta=__webpack_require__("./src/composables/use-collection-meta.ts"),VCollectionResults=__webpack_require__("./src/components/VSearchResultsGrid/VCollectionResults.vue"),_excluded=["collection"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var collectionvue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VAudioCollectionPage",components:{VCollectionResults:VCollectionResults.default},layout:"content-layout",middleware:middleware_collection.collectionMiddleware,setup:function setup(){var mediaStore=Object(stores_media.a)(),searchStore=Object(search.b)(),collectionParams=Object(vue.computed)((function(){return searchStore.collectionParams})),isFetching=Object(vue.computed)((function(){return mediaStore.fetchState.isFetching})),media=Object(vue.ref)([]),creatorUrl=Object(vue.ref)(),i18n=Object(use_i18n.a)(),collectionLabel=Object(vue.computed)((function(){if(!collectionParams.value)return"";var _collectionParams$val=collectionParams.value,collection=_collectionParams$val.collection,params=Object(objectWithoutProperties.a)(_collectionParams$val,_excluded);return i18n.t("collection.ariaLabel.".concat(collection,".audio"),function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},params)).toString()})),fetchMedia=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var _ref2,shouldPersistMedia,_args=arguments;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _ref2=_args.length>0&&void 0!==_args[0]?_args[0]:{shouldPersistMedia:!1},shouldPersistMedia=_ref2.shouldPersistMedia,_context.next=3,mediaStore.fetchMedia({shouldPersistMedia:shouldPersistMedia});case 3:media.value=_context.sent,creatorUrl.value=media.value.length>0?media.value[0].creator_url:void 0;case 5:case"end":return _context.stop()}}),_callee)})));return function fetchMedia(){return _ref.apply(this,arguments)}}(),pageTitle=Object(use_collection_meta.a)({collectionParams:collectionParams,mediaType:"audio",i18n:i18n}).pageTitle;Object(dist_runtime.j)({meta:[{hid:"robots",name:"robots",content:"all"},{hid:"og:title",property:"og:title",content:pageTitle.value}],title:pageTitle.value}),Object(dist_runtime.i)(Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,fetchMedia();case 2:case"end":return _context2.stop()}}),_callee2)}))));var route=Object(dist_runtime.k)();return Object(vue.watch)(route,(function(){fetchMedia()})),{collectionParams:collectionParams,isFetching:isFetching,media:media,collectionLabel:collectionLabel,loadMore:function loadMore(){fetchMedia({shouldPersistMedia:!0})}}},head:{}}),audio_collectionvue_type_script_lang_ts_=collectionvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(audio_collectionvue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"p-6 pt-0 lg:p-10 lg:pt-2"},[this.collectionParams?_c("VCollectionResults",{attrs:{"search-term":"","is-fetching":this.isFetching,results:{type:"audio",items:this.media},"collection-label":this.collectionLabel,"collection-params":this.collectionParams},on:{"load-more":this.loadMore}}):this._e()],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCollectionResults:__webpack_require__("./src/components/VSearchResultsGrid/VCollectionResults.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioCollectionPage",exportName:"default",description:"",tags:{}}}}]);
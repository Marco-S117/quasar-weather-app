/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

/*
  Dependencies
*/

  // DOC: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
  import { precacheAndRoute } from 'workbox-precaching'
  import { StaleWhileRevalidate } from 'workbox-strategies'
  import { registerRoute } from 'workbox-routing'

/*
  Config
*/

  precacheAndRoute(self.__WB_MANIFEST)

/*
  Cache api request
*/

registerRoute(
  ({url}) => url.href.startsWith('http'),
  new StaleWhileRevalidate()
)


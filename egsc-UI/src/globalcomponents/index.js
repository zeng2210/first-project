/* Automatically generated by './build/bin/build-entry.js' */
import HkVideoDialog from './video_dialog/index.js'
import HkWarnDialog from './warning_dialog/index.js'
import Hksecuritydialog from './security_dialog/index.js'
import Hkparkwarndialog from './warn_dialog/index.js'
import Hkpersonwarndialog from './personmana_dialog/index.js'
import Hkpersonoffdialog from './personoff_dialog/index.js'
import DhBroadcastDialog from './dhbroadcastdialog/index.js'
import HkabnormalDialog from './abnormal_dialog/index.js'
import AccessDialog from './doorAccess_dialog/index.js'
import DownloadOcx from './download_ocx/index.js'
import AbnormalEventPie from './abnormal_event_pie/index'
import HkpartolabnorDialog from './partolequipabnor_dialog/index'
import DeviceMap from './device_map/index.js'
import GPSDeviceMap from './GPSdevice_map/index.js'
import AjbDialog from './ajb_dialog/index.js'
const components = [
  HkVideoDialog,
  HkWarnDialog,
  Hksecuritydialog,
  Hkparkwarndialog,
  Hkpersonwarndialog,
  Hkpersonoffdialog,
  DhBroadcastDialog,
  HkabnormalDialog,
  AccessDialog,
  DownloadOcx,
  AbnormalEventPie,
  HkpartolabnorDialog,
  DeviceMap,
  GPSDeviceMap,
  AjbDialog
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  HkVideoDialog,
  HkWarnDialog,
  Hksecuritydialog,
  Hkparkwarndialog,
  Hkpersonwarndialog,
  Hkpersonoffdialog,
  DhBroadcastDialog,
  HkabnormalDialog,
  AccessDialog,
  DownloadOcx,
  AbnormalEventPie,
  HkpartolabnorDialog,
  DeviceMap,
  GPSDeviceMap,
  AjbDialog
}

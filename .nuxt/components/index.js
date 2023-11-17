export { default as Actualizado } from '../..\\components\\actualizado.vue'
export { default as Agregar } from '../..\\components\\agregar.vue'
export { default as Correcto } from '../..\\components\\correcto.vue'
export { default as Exitor } from '../..\\components\\exitor.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Help } from '../..\\components\\help.vue'
export { default as Incorrecto } from '../..\\components\\incorrecto.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as Regerror } from '../..\\components\\regerror.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

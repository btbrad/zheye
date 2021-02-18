import { ref, onMounted, onUnmounted, Ref } from 'vue'

export default function useClickOutside (ElementRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false)
  const handler = (event: MouseEvent) => {
    if (ElementRef.value) {
      if (!ElementRef.value.contains(event.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}

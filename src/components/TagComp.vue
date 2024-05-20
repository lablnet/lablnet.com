<template>
  <div
    :class="
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ' +
      klass
    "
  >
    <span v-html="ico"></span>
    <span>{{ text }}</span>
  </div>
</template>

<script lang="js">
export default {
    name: "TagComp",
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            ico: null,
            klass: null,
        }
    },
    mounted() {
        this.getIcon()
    },
    methods: {
        devicon(icon) {
            return "<i class='inline-flex mr-2 devicon-"+icon+"'></i>"
        },
        getIcon() {
            const svgMaps = {
                'vue': '<svg class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" viewBox="0 0 262 227">'+
                        '<path fill="#41B883" d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749.001H161.096z" />'+
                        '<path fill="#34495E" d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001h-48.302z" />'+
                    '</svg>',
                'cordova': '<svg  class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" viewBox="0 0 256 245" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M232.727 244.364h-41.454l2.909-34.91h-20.364l-2.909 34.91H85.091l-2.91-34.91H61.819l2.91 34.91H23.272L0 93.09 58.182 0h139.636L256 93.09l-23.273 151.274zM186.182 46.545h-37.403L151.273 64h-46.546l2.494-17.455H69.818L46.545 93.091l11.637 93.09h139.636l11.637-93.09-23.273-46.546zm-20.364 108.742c-3.213 0-5.818-9.69-5.818-21.643 0-11.954 2.605-21.644 5.818-21.644 3.213 0 5.818 9.69 5.818 21.644 0 11.953-2.605 21.643-5.818 21.643zm-73.454 1.804c-3.213 0-5.819-9.69-5.819-21.644 0-11.953 2.606-21.643 5.819-21.643s5.818 9.69 5.818 21.643c0 11.954-2.605 21.644-5.818 21.644z" fill="#444"/></svg',
                'zoom': '<svg class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#2196f3"></circle><path fill="#fff" d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"></path><polygon fill="#fff" points="37,31 31,27 31,21 37,17"></polygon></svg>',
                'playwright': '<svg  class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 508 508" xml:space="preserve"><circle style="fill:#FD8469;" cx="254" cy="254" r="254"/><path style="fill:#324A5E;" d="M405.6,163.2c-26.8,15.2-60,29.6-96.8,41.6c-36.8,12-72,19.2-102.8,22.8c2,16.4,5.6,33.6,11.2,50.8	c29.2,90,99.6,148,157.2,129.6c57.6-18.8,81.2-106.8,52-196.8C420.8,194,413.6,178,405.6,163.2z M236,267.6	c26-14.4,58.8-5.2,73.6,20.8l0,0C283.2,303.2,250.4,293.6,236,267.6z M360.8,366c-33.2,10.8-68.8-5.6-82.8-36.4	c19.6,11.2,46.4,14,73.2,5.6c26.4-8.4,46.4-26.4,56-47.2C413.6,321.6,394,355.2,360.8,366z M357.2,273.2L357.2,273.2	c-3.6-29.6,17.6-56.4,47.2-60C408,242.8,386.8,269.6,357.2,273.2z"/><path style="fill:#FFFFFF;" d="M322.4,155.2c-34-2-73.6-8-114.8-18.8s-78.4-24.8-109.2-40c-8,16.4-14.8,34.4-20,54C52,251.6,83.2,347.6,148,364.4c64.8,16.8,138.8-51.2,165.2-152.4C318.4,192.4,321.6,173.6,322.4,155.2z M102.4,151.6	c32.8,2,58,30.4,56,63.2l0,0C125.6,212.8,100.4,184.4,102.4,151.6z M160.4,317.2c-37.2-9.6-60.8-45.6-55.6-83.2c11.6,22.4,35.2,40.8,64.8,48.4s59.2,2.8,80.4-10.8C236,307.2,197.6,327.2,160.4,317.2z M212.4,228.8L212.4,228.8c14.4-29.6,50-42,79.6-27.6C277.6,230.8,242,243.2,212.4,228.8z"/></svg>'
            }
            const icons = {
                'laravel':  [this.devicon('laravel-plain'), 'bg-red-100', 'text-red-800'],
                'php':     [this.devicon('php-plain'), 'bg-blue-100', 'text-blue-800'],
                'vue':     [svgMaps['vue'], 'bg-green-100', 'text-green-800'],
                'javascript': [this.devicon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'html':    [this.devicon('html5-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'css':     [this.devicon('css3-plain'), 'bg-purple-100', 'text-purple-800'],
                'mysql':   [this.devicon('mysql-plain'), 'bg-pink-100', 'text-pink-800'],
                'firebase': [this.devicon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'typescript': [this.devicon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
                'flutter': [this.devicon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
                'react':   [this.devicon('react-original'), 'bg-indigo-100', 'text-indigo-800'],
                'nodejs':  [this.devicon('nodejs-plain'), 'bg-green-100', 'text-green-800'],
                'wordpress': [this.devicon('wordpress-plain'), 'bg-blue-100', 'text-blue-800'],
                'tailwindcss': [this.devicon('tailwindcss-plain'), 'bg-purple-100', 'text-purple-800'],
                'jquery': [this.devicon('jquery-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'bootstrap': [this.devicon('bootstrap-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'python': [this.devicon('python-plain'), 'bg-blue-100', 'text-blue-800'],
                'dart': [this.devicon('dart-plain'), 'bg-blue-100', 'text-blue-800'],
                'cordova': [svgMaps['cordova'], 'bg-blue-100', 'text-blue-800'],
                'flask': [this.devicon('flask-plain'), 'bg-blue-100', 'text-blue-800'],
                'zoom': [svgMaps['zoom'], 'bg-blue-100', 'text-blue-800'],
                'functions': [this.devicon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
                'aws': [this.devicon('amazonwebservices-original'), 'bg-yellow-100', 'text-yellow-800'],
                'lambda': [this.devicon('amazonwebservices-original'), 'bg-yellow-100', 'text-yellow-800'],
                'github': [this.devicon('github-original'), 'bg-gray-100', 'text-gray-800'],
                'dynamodb': [this.devicon('amazonwebservices-original'), 'bg-yellow-100', 'text-yellow-800'],
                'github-action': [this.devicon('github-original'), 'bg-gray-100', 'text-gray-800'],
                'github-app': [this.devicon('github-original'), 'bg-gray-100', 'text-gray-800'],
                'playwright': [svgMaps['playwright'], 'bg-green-100', 'text-green-800'],
                'cloudflare worker': [this.devicon('cloudflare-plain colored'), 'bg-orange-100', 'text-orange-800'],
                'github actions': [this.devicon('github-original'), 'bg-gray-100', 'text-gray-800'],
            }
            let [icon, bg, front] = icons[this.text.toLowerCase()] || [undefined, 'bg-gray-100', 'text-gray-800']
            this.ico = icon
            this.klass = bg + " " + front
        }
    }
}
</script>

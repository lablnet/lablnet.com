<template>
    <div :class="'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ' + klass">
        <span v-html="ico"></span>
        <span>{{text}}</span>
    </div>
</template>

<script lang="js">
export default {
    name: "Tag",
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
                    '</svg>'
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
            }
            let [icon, bg, front] = icons[this.text.toLowerCase()] || [undefined, 'bg-gray-100', 'text-gray-800']
            this.ico = icon
            this.klass = bg + " " + front
        }
    }
}
</script>

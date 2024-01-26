import { h, Component } from 'preact';

export default class TagComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ico: null,
            klass: null,
        };
    }

    componentDidMount() {
        this.getIcon();
    }

    devicon(icon) {
        return `<i class='inline-flex mr-2 devicon-${icon}'></i>`;
    }

    getIcon() {
        const svgMaps = {
            vue:
                '<svg class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" viewBox="0 0 262 227">' +
                '<path fill="#41B883" d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749.001H161.096z" />' +
                '<path fill="#34495E" d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001h-48.302z" />' +
                '</svg>',
            cordova:
                '<svg  class="w-3 h-3 inline-flex mr-1.5 shrink-0 self-center" viewBox="0 0 256 245" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M232.727 244.364h-41.454l2.909-34.91h-20.364l-2.909 34.91H85.091l-2.91-34.91H61.819l2.91 34.91H23.272L0 93.09 58.182 0h139.636L256 93.09l-23.273 151.274zM186.182 46.545h-37.403L151.273 64h-46.546l2.494-17.455H69.818L46.545 93.091l11.637 93.09h139.636l11.637-93.09-23.273-46.546zm-20.364 108.742c-3.213 0-5.818-9.69-5.818-21.643 0-11.954 2.605-21.644 5.818-21.644 3.213 0 5.818 9.69 5.818 21.644 0 11.953-2.605 21.643-5.818 21.643zm-73.454 1.804c-3.213 0-5.819-9.69-5.819-21.644 0-11.953 2.606-21.643 5.819-21.643s5.818 9.69 5.818 21.643c0 11.954-2.605 21.644-5.818 21.644z" fill="#444"/></svg',
        };
    
        const icons: object = {
            laravel: [devicon('laravel-plain'), 'bg-red-100', 'text-red-800'],
            php: [devicon('php-plain'), 'bg-blue-100', 'text-blue-800'],
            vue: [svgMaps['vue'], 'bg-green-100', 'text-green-800'],
            javascript: [devicon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
            html: [devicon('html5-plain'), 'bg-yellow-100', 'text-yellow-800'],
            css: [devicon('css3-plain'), 'bg-purple-100', 'text-purple-800'],
            mysql: [devicon('mysql-plain'), 'bg-pink-100', 'text-pink-800'],
            firebase: [devicon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
            typescript: [devicon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
            flutter: [devicon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
            react: [devicon('react-original'), 'bg-indigo-100', 'text-indigo-800'],
            nodejs: [devicon('nodejs-plain'), 'bg-green-100', 'text-green-800'],
            wordpress: [devicon('wordpress-plain'), 'bg-blue-100', 'text-blue-800'],
            tailwindcss: [devicon('tailwindcss-plain'), 'bg-purple-100', 'text-purple-800'],
            jquery: [devicon('jquery-plain'), 'bg-yellow-100', 'text-yellow-800'],
            bootstrap: [devicon('bootstrap-plain'), 'bg-yellow-100', 'text-yellow-800'],
            python: [devicon('python-plain'), 'bg-blue-100', 'text-blue-800'],
            dart: [devicon('dart-plain'), 'bg-blue-100', 'text-blue-800'],
            cordova: [svgMaps['cordova'], 'bg-blue-100', 'text-blue-800'],
            flask: [devicon('flask-plain'), 'bg-blue-100', 'text-blue-800'],
        };
    
        let [icon, bg, front] = icons[this.props.text.toLowerCase()] || [undefined, 'bg-gray-100', 'text-gray-800'];
        this.setState({ ico: icon, klass: bg + " " + front });
    }

    render() {
        const { ico, klass } = this.state;
        return (
            <div class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${klass}`}>
                <span dangerouslySetInnerHTML={{ __html: ico }}></span>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

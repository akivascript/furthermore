(defproject furthermore "0.1.0"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [compojure "1.3.2"]
                 [hiccup "1.0.5"]
                 [markdown-clj "0.9.62"]
                 [ring-server "0.4.0"]
                 [typographer "1.0.0"]]
  :plugins [[lein-cljsbuild "1.0.6-SNAPSHOT"]
            [lein-ring "0.8.12"]]
  :ring {:handler furthermore.handler/app
         :init furthermore.handler/init
         :destroy furthermore.handler/destroy}
  :cljsbuild {:builds [{:id "furthermore"
                        :source-paths ["src/furthermore_cljs"]
                        :compiler {:output-to "furthermore.js"
                                   :output-dir "public/js"
                                   :optimizations :whitespace 
                                   :pretty-print true
                                   :source-map true}}]}
  :profiles
  {:uberjar {:aot :all}
   :production {:ring {:open-browser? false,
                       :stacktraces? false,
                       :auto-reload? false}}
   :dev {:source-paths ["dev"]
         :dependencies [[expectations "2.0.13"]
                        [ring-mock "0.1.5"]
                        [ring/ring-devel "1.3.2"]]}})

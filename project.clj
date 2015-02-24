(defproject furthermore "0.1.0"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [clj-time "0.9.0"]
                 [compojure "1.3.2"]
                 [environ "1.0.0"]
                 [om "0.8.0-rc1"]
                 [markdown-clj "0.9.62"]
                 [com.novemberain/monger "2.1.0"]
                 [ring/ring-defaults "0.1.4"]
                 [selmer "0.8.0"]
                 [typographer "1.0.0"]]
  :plugins [[lein-cljsbuild "1.0.6-SNAPSHOT"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.2"]]
  :main furthermore.handler
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
  :profiles {:uberjar {:aot :all}
             :production {:ring {:open-browser? false
                                 :stacktraces? false
                                 :auto-reload? false}}
             :dev [:private {:dependencies [[expectations "2.0.16"]
                                            [javax.servlet/servlet-api "2.5"]
                                            [ring-mock "0.1.5"]
                                            [ring/ring-devel "1.3.2"]]
                             ;:source-paths ["dev"]
                             :repl-options {:init-ns furthermore.handler}}]})

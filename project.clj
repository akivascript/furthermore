(defproject furthermore "0.7.5-SNAPSHOT"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies
  [[org.webjars/bootstrap "4.0.0-alpha.2"] ;; luminus
   [bouncer "1.0.8"] ;; luminus
   [org.clojure/clojure "1.9.0-alpha10"]
   [org.clojure/clojurescript "1.9.93" :scope "provided"] ;; luminus
   [clj-time "0.12.0"]
   #_[clj-rss "0.2.3"]
   [cljs-ajax "0.5.8"]
   [com.andrewmcveigh/cljs-time "0.4.0"]
   [compojure "1.5.1"]
   [cprop "0.1.8"] ;; luminus
   [org.clojure/data.json "0.2.6" :classifier "aot"]
   [prismatic/dommy "1.1.0"]
   [environ "1.0.3"]
   [org.webjars/font-awesome "4.6.3"] ;; luminus
   [hiccup "1.0.5"]
   [org.webjars/jquery "3.0.0"] ;; luminus
   [liberator "0.14.1"]
   [luminus-immutant "0.2.2"] ;; luminus
   [luminus-nrepl "0.1.4"] ;; luminus
   [markdown-clj "0.9.89"] ;; luminus
   [medley "0.8.2"]
   [com.novemberain/monger "3.0.2"]
   [metosin/ring-http-response "0.8.0"] ;; luminus
   [mount "0.1.10"] ;; luminus
   [ring-basic-authentication "1.0.5"]
   [ring/ring-defaults "0.2.1"]
   [ring/ring-jetty-adapter "1.5.0"]
   [ring-middleware-format "0.7.0"] ;; luminus
   [ring-webjars "0.1.1"] ;; luminus
   [secretary "1.2.3"]
   [selmer "1.0.7"] ;; luminus
   [org.webjars.bower/tether "1.3.3"] ;; luminus
   [org.clojure/tools.cli "0.3.5"] ;; luminus
   [org.clojure/tools.logging "0.3.1"] ;; luminus
   [org.clojure/tools.reader "0.10.0" :classifier "aot"]
   [twitter-api "0.7.8"]
   [typographer "1.1.0"]
   [org.webjars/webjars-locator-jboss-vfs "0.1.0"]] ;; luminus

  :plugins
  [[lein-auto "0.1.2"]
   [lein-cljsbuild "1.1.3"]
   [lein-cprop "1.0.1"]
   [lein-immutant "2.1.0"]
   [lein-sassc "0.10.4"]]

  :source-paths
  ["src/clj" "src/cljc"]

  :resource-paths
  ["resources" "target/cljsbuild"]

  :main furthermore.core

  :target-path "target/%s/"

  :jvm-opts ["-server"
             "-Dconf=.leinenv"]

  :sassc
  [{:src "resources/scss/screen.scss"
    :output-to "resources/public/css/screen.css"
    :style "nested"
    :import-path "resources/scss"}]

  :auto
  {"sassc" {:file-pattern #"\.(scss|sass)$"
            :paths ["resources/scss"]}}

  :hooks [leiningen.sassc]

  :clean-targets ^{:protect false}
  [:target-path [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :figwheel
  {:http-server-root "public"
   :nrepl-port 7002
   :css-dirs ["resources/public/css"]
   :nrepl-middleware {cemerick.piggieback/wrap-cljs-repl}}

  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
             :cljsbuild
             {:builds
              {:min
               {:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                :compiler
                {:output-to "target/cljsbuild/public/js/furthermore.js"
                 ;;:externs ["react/externs/react.js"]
                 :optimizations :advanced
                 :pretty-print false
                 :closure-warnings
                 {:externs-validation :off
                  :non-standard-jsdoc :off}}}}}
             :aot :all
             :uberjar-name "furthermore.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev [:project/dev :profiles/dev]
   :test [:project/test :profiles/test]

   :project/dev {:dependencies [[binaryage/devtools "0.7.2"]
                                [doo "0.1.7"]
                                [figwheel-sidecar "0.5.4-7"]
                                [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                                [prone "1.1.0"]
                                [pjstadig/humane-test-output "0.8.0"]
                                [ring/ring-devel "1.5.0"]
                                [ring/ring-mock "0.3.0"]]

                 :plugins [[org.clojure/clojurescript "1.9.93"]
                           [lein-doo "0.1.7"]
                           [lein-figwheel "0.5.4-6"]
                           [com.jakemccrary/lein-test-refresh "0.14.0"]]

                 :cljsbuild
                 {:builds
                  {:app
                   {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                    :compiler
                    {:main "furthermore.app"
                     :asset-path "js/out"
                     :output-to "target/cljsbuild/public/js/furthermore.js"
                     :output-dir "target/cljsbuild/public/js/out"
                     :source-map true
                     :optimizations :none
                     :pretty-print true}}}}

                 :doo {:build "test"}
                 :source-paths ["env/dev/clj" "test/clj"]
                 :resource-paths ["env/dev/resources"]
                 :repl-options {:init-ns user
                                :caught clj-stacktrace.repl/pst+}
                 :injections [(require 'pjstadig.humane-test-output)
                              (pjstadig.humane-test-output/activate!)]}

   :project/test {:resource-paths ["env/dev/resources" "env/test/resources"]
                  :cljsbuild
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "furthermore.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}}

   :profiles/dev {}
   :profiles/test {}})

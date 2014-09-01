activate :livereload

set :css_dir,    'scss'
set :js_dir,     'app'
set :images_dir, 'images'

activate :emblem

after_configuration do
  sprockets.append_path "#{root}/bower_components"
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end

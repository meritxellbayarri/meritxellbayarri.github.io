FROM ruby:2.4

ENV JEKYLL_ENV production

RUN gem install github-pages --no-rdoc --no-ri

CMD jekyll serve

EXPOSE 4000

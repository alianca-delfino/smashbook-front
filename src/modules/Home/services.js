import api from '../../utils/api';

function validateUrl(url) {
  const match = /(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
  const [regResult] = url.matchAll(match);
  const [,, path] = regResult;

  const [, tournamentLabel, tournament, eventLabel, event] = path.split('/');
  if (tournamentLabel !== 'tournament' || eventLabel !== 'events' || !tournament || !event) return false;

  return true;
}

function saveEvent(url) {
  const match = /(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
  const [regResult] = url.matchAll(match);
  const [,, path] = regResult;

  const [, tournamentLabel, tournament, eventLabel, event] = path.split('/');
  if (tournamentLabel !== 'tournament' || eventLabel !== 'events' || !tournament || !event) return false;

  return api
    .post(`event?eventUrl=tournament/${tournament}/event/${event}`)
    .then(data => data.data);
}

function getEvents(page = 1) {
  return api
    .get(`events?page=${page}`)
    .then(data => data.data);
}

function getEvent(slug) {
  return api
    .get(`event?slug=${slug}`)
    .then(data => data.data);
}

export default {
  saveEvent,
  validateUrl,
  getEvent,
  getEvents,
};

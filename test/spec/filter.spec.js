'use strict';

describe('filter', function () {
    beforeEach(module('myFilter'));

    describe('quote', function () {
        it('Should places the text in quotes', inject(function (quoteFilter) {
            expect(quoteFilter('To be, or not to be...')).toBe('\"To be, or not to be...\"');
        }))
    });

    describe('withoutH', function () {
        it('Should removes all the letters h', inject(function (withoutHFilter) {
            expect(withoutHFilter('The Hobbit: The Battle of the Five Armies')).toBe('Te obbit: Te Battle of te Five Armies');
        }));
        it('Should removes all the letters H', inject(function (withoutHFilter) {
            expect(withoutHFilter('The Hobbit: The Battle of the Five Armies')).toBe('Te obbit: Te Battle of te Five Armies');
        }));
        it('Should removes all the letters h and H', inject(function (withoutHFilter) {
            expect(withoutHFilter('The Hobbit: The Battle of the Five Armies')).toBe('Te obbit: Te Battle of te Five Armies');
        }));
    });

    describe('firstLetterUpp', function () {
        it('Should make first letters Big', inject(function (firstLetterUppFilter) {
            expect(firstLetterUppFilter('Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories'))
                .toBe('Visit Bbc News For Up-To-The-Minute News, Breaking News, Video, Audio And Stories')
        }))
    })
});

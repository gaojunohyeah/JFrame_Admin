/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

module.exports = {
  e: '$e',                    // $e: equal
  and: '$and',                // $and: {a: 5}                   // AND (a = 5)
  or: '$or',                  // $or: [{a: 5}, {a: 6}]          // (a = 5 OR a = 6)
  gt: '$gt',                  // $gt: 6,                        // > 6
  gte: '$gte',                // $gte: 6,                       // >= 6
  lt: '$lt',                  // $lt: 10,                       // < 10
  lte: '$lte',                // $lte: 10,                      // <= 10
  ne: '$ne',                  // $ne: 20,                       // != 20
  between: '$between',        // $between: [6, 10],             // BETWEEN 6 AND 10
  notBetween: '$notBetween',  // $notBetween: [11, 15],         // NOT BETWEEN 11 AND 15
  in: '$in',                  // $in: [1, 2],                   // IN [1, 2]
  notIn: '$notIn',            // $notIn: [1, 2],                // NOT IN [1, 2]
  like: '$like',              // $like: '%hat',                 // LIKE '%hat'
  notLike: '$notLike',        // $notLike: '%hat'               // NOT LIKE '%hat'
  iLike: '$iLike',            // $iLike: '%hat'                 // ILIKE '%hat' (case insensitive) (PG only)
  notILike: '$notILike',      // $notILike: '%hat'              // NOT ILIKE '%hat'  (PG only)
  overlap: '$overlap',        // $overlap: [1, 2]               // && [1, 2] (PG array overlap operator)
  contains: '$contains',      // $contains: [1, 2]              // @> [1, 2] (PG array contains operator)
  contained: '$contained',    // $contained: [1, 2]             // <@ [1, 2] (PG array contained by operator)
  any: '$any',                // $any: [2,3]                    // ANY ARRAY[2, 3]::INTEGER (PG only)

  col: '$col',                // $col: 'user.organization_id'   // = "user"."organization_id", with dialect specific column identifiers, PG in this example

//$and: {a: 5}                   // AND (a = 5)
//$or: [{a: 5}, {a: 6}]          // (a = 5 OR a = 6)
//$gt: 6,                        // > 6
//$gte: 6,                       // >= 6
//$lt: 10,                       // < 10
//$lte: 10,                      // <= 10
//$ne: 20,                       // != 20
//$between: [6, 10],             // BETWEEN 6 AND 10
//$notBetween: [11, 15],         // NOT BETWEEN 11 AND 15
//$in: [1, 2],                   // IN [1, 2]
//$notIn: [1, 2],                // NOT IN [1, 2]
//$like: '%hat',                 // LIKE '%hat'
//$notLike: '%hat'               // NOT LIKE '%hat'
//$iLike: '%hat'                 // ILIKE '%hat' (case insensitive) (PG only)
//$notILike: '%hat'              // NOT ILIKE '%hat'  (PG only)
//$like: { $any: ['cat', 'hat']} // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
//$overlap: [1, 2]               // && [1, 2] (PG array overlap operator)
//$contains: [1, 2]              // @> [1, 2] (PG array contains operator)
//$contained: [1, 2]             // <@ [1, 2] (PG array contained by operator)
//$any: [2,3]                    // ANY ARRAY[2, 3]::INTEGER (PG only)
//
//$col: 'user.organization_id'   // = "user"."organization_id", with dialect specific column identifiers, PG in this example


};
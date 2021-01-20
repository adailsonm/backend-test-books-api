CREATE DATABASE library
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
CREATE SCHEMA library
    AUTHORIZATION postgres;

CREATE TABLE library.users
(
    identifier uuid,
    name character varying(200) NOT NULL,
    email character varying(200) NOT NULL,
    profile integer NOT NULL,
    password character varying(300),
    PRIMARY KEY (identifier)
);

ALTER TABLE library.users
    OWNER to postgres;

CREATE TABLE library.books
(
    identifier uuid NOT NULL,
    isbn integer NOT NULL,
    author uuid NOT NULL,
    CONSTRAINT books_pkey PRIMARY KEY (identifier)
)

TABLESPACE pg_default;

ALTER TABLE library.books
    OWNER to postgres;

CREATE TABLE library.authors
(
    identifier uuid NOT NULL,
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT authors_pkey PRIMARY KEY (identifier)
)

TABLESPACE pg_default;

ALTER TABLE library.authors
    OWNER to postgres;
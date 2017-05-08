seeding:
	sequelize --config './orm/config/config.json' --migrations-path './orm/migrations' --models-path './orm/models' db:migrate:undo:all
	sequelize --config './orm/config/config.json' --migrations-path './orm/migrations' db:migrate
	sequelize --config './orm/config/config.json' --seeders-path './orm/seeders' db:seed:all



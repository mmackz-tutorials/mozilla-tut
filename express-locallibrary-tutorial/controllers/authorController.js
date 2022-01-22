const { nextTick } = require("async");
const Author = require("../models/author");

// Display list of all Authors
exports.author_list = (req, res) => {
   Author.find()
      .sort([["family_name", "asc"]])
      .exec((err, data) => {
         if (err) return next(err);
         res.render("author_list", { title: "Author List", author_list: data });
      });
};

// Display detail page for a specific Author
exports.author_detail = (req, res) => {
   res.send("NOT IMPLEMENTED: Author detail " + req.params.id);
};

// Display Author create form on GET
exports.author_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST
exports.author_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET
exports.author_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author delete GET");
};

// Display Author delete form on POST
exports.author_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET
exports.author_update_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update GET");
};

// Display Author update form on POST
exports.author_update_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update POST");
};

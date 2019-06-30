var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosForm = /** @class */ (function (_super) {
            __extends(BarriosForm, _super);
            function BarriosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BarriosForm.init) {
                    BarriosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(BarriosForm, [
                        'Nombre', w0,
                        'Logo', w1,
                        'Url', w0,
                        'TelefonOs', w0,
                        'Direccion', w0,
                        'IsActive', w2
                    ]);
                }
                return _this;
            }
            BarriosForm.formKey = 'Administration.Barrios';
            return BarriosForm;
        }(Serenity.PrefixedContext));
        Administration.BarriosForm = BarriosForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosRow;
        (function (BarriosRow) {
            BarriosRow.idProperty = 'Id';
            BarriosRow.nameProperty = 'Nombre';
            BarriosRow.localTextPrefix = 'Administration.Barrios';
            BarriosRow.lookupKey = 'Administration.Barrios';
            function getLookup() {
                return Q.getLookup('Administration.Barrios');
            }
            BarriosRow.getLookup = getLookup;
        })(BarriosRow = Administration.BarriosRow || (Administration.BarriosRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosService;
        (function (BarriosService) {
            BarriosService.baseUrl = 'Administration/Barrios';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BarriosService[x] = function (r, s, o) {
                    return Q.serviceRequest(BarriosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BarriosService = Administration.BarriosService || (Administration.BarriosService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.CheckLookupEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0,
                        'ClientIdList', w4
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UsersBarriosForm = /** @class */ (function (_super) {
            __extends(UsersBarriosForm, _super);
            function UsersBarriosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UsersBarriosForm.init) {
                    UsersBarriosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(UsersBarriosForm, [
                        'UserId', w0,
                        'BarrioId', w1
                    ]);
                }
                return _this;
            }
            UsersBarriosForm.formKey = 'Administration.UsersBarrios';
            return UsersBarriosForm;
        }(Serenity.PrefixedContext));
        Administration.UsersBarriosForm = UsersBarriosForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UsersBarriosRow;
        (function (UsersBarriosRow) {
            UsersBarriosRow.idProperty = 'UserId';
            UsersBarriosRow.localTextPrefix = 'Administration.UsersBarrios';
        })(UsersBarriosRow = Administration.UsersBarriosRow || (Administration.UsersBarriosRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosForm = /** @class */ (function (_super) {
            __extends(AvisosForm, _super);
            function AvisosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvisosForm.init) {
                    AvisosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.ImageUploadEditor;
                    Q.initFormType(AvisosForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'Caducidad', w2,
                        'Vigente', w3,
                        'Descripcion', w0,
                        'Imagen', w4,
                        'UserInsert', w1,
                        'UserUpdate', w1,
                        'DateUpdate', w2,
                        'DateInsert', w2
                    ]);
                }
                return _this;
            }
            AvisosForm.formKey = 'Contenidos.Avisos';
            return AvisosForm;
        }(Serenity.PrefixedContext));
        Contenidos.AvisosForm = AvisosForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosRow;
        (function (AvisosRow) {
            AvisosRow.idProperty = 'Id';
            AvisosRow.nameProperty = 'Nombre';
            AvisosRow.localTextPrefix = 'Contenidos.Avisos';
        })(AvisosRow = Contenidos.AvisosRow || (Contenidos.AvisosRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosService;
        (function (AvisosService) {
            AvisosService.baseUrl = 'Contenidos/Avisos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvisosService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvisosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvisosService = Contenidos.AvisosService || (Contenidos.AvisosService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasForm = /** @class */ (function (_super) {
            __extends(CategoriasForm, _super);
            function CategoriasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriasForm.init) {
                    CategoriasForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(CategoriasForm, [
                        'Type', w0,
                        'Nombre', w1,
                        'Mostrar', w2,
                        'Vigente', w2
                    ]);
                }
                return _this;
            }
            CategoriasForm.formKey = 'Contenidos.Categorias';
            return CategoriasForm;
        }(Serenity.PrefixedContext));
        Contenidos.CategoriasForm = CategoriasForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasRow;
        (function (CategoriasRow) {
            CategoriasRow.idProperty = 'Id';
            CategoriasRow.nameProperty = 'Nombre';
            CategoriasRow.localTextPrefix = 'Contenidos.Categorias';
            CategoriasRow.lookupKey = 'Contenidos.Categorias';
            function getLookup() {
                return Q.getLookup('Contenidos.Categorias');
            }
            CategoriasRow.getLookup = getLookup;
        })(CategoriasRow = Contenidos.CategoriasRow || (Contenidos.CategoriasRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasService;
        (function (CategoriasService) {
            CategoriasService.baseUrl = 'Contenidos/Categorias';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriasService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriasService = Contenidos.CategoriasService || (Contenidos.CategoriasService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesForm = /** @class */ (function (_super) {
            __extends(ComisionesForm, _super);
            function ComisionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComisionesForm.init) {
                    ComisionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ComisionesForm, [
                        'Nombre', w0,
                        'Habilitada', w1,
                        'Sigla', w0,
                        'Color', w0,
                        'Mails', w0,
                        'UserInsert', w2,
                        'DateInsert', w3,
                        'UserUpdate', w2,
                        'DateUpdate', w3,
                        'BarrioId', w2
                    ]);
                }
                return _this;
            }
            ComisionesForm.formKey = 'Contenidos.Comisiones';
            return ComisionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ComisionesForm = ComisionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesForm = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesForm, _super);
            function ComisionesIntegrantesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComisionesIntegrantesForm.init) {
                    ComisionesIntegrantesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ComisionesIntegrantesForm, [
                        'Id', w0,
                        'Nombre', w1,
                        'UserInsert', w0,
                        'DateInsert', w2,
                        'UserUpdate', w0,
                        'DateUpdate', w2
                    ]);
                }
                return _this;
            }
            ComisionesIntegrantesForm.formKey = 'Contenidos.ComisionesIntegrantes';
            return ComisionesIntegrantesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ComisionesIntegrantesForm = ComisionesIntegrantesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesRow;
        (function (ComisionesIntegrantesRow) {
            ComisionesIntegrantesRow.idProperty = 'IdComision';
            ComisionesIntegrantesRow.nameProperty = 'Nombre';
            ComisionesIntegrantesRow.localTextPrefix = 'Contenidos.ComisionesIntegrantes';
        })(ComisionesIntegrantesRow = Contenidos.ComisionesIntegrantesRow || (Contenidos.ComisionesIntegrantesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesService;
        (function (ComisionesIntegrantesService) {
            ComisionesIntegrantesService.baseUrl = 'Contenidos/ComisionesIntegrantes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ComisionesIntegrantesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComisionesIntegrantesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComisionesIntegrantesService = Contenidos.ComisionesIntegrantesService || (Contenidos.ComisionesIntegrantesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesRow;
        (function (ComisionesRow) {
            ComisionesRow.idProperty = 'Id';
            ComisionesRow.nameProperty = 'Nombre';
            ComisionesRow.localTextPrefix = 'Contenidos.Comisiones';
        })(ComisionesRow = Contenidos.ComisionesRow || (Contenidos.ComisionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesService;
        (function (ComisionesService) {
            ComisionesService.baseUrl = 'Contenidos/Comisiones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ComisionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComisionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComisionesService = Contenidos.ComisionesService || (Contenidos.ComisionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasForm = /** @class */ (function (_super) {
            __extends(EncuestasForm, _super);
            function EncuestasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EncuestasForm.init) {
                    EncuestasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(EncuestasForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'FechaAlta', w2,
                        'FechaBaja', w2,
                        'Vigente', w3,
                        'Descripcion', w0,
                        'UserInsert', w1,
                        'DateInsert', w2,
                        'UserUpdate', w1,
                        'DateUpdate', w2
                    ]);
                }
                return _this;
            }
            EncuestasForm.formKey = 'Contenidos.Encuestas';
            return EncuestasForm;
        }(Serenity.PrefixedContext));
        Contenidos.EncuestasForm = EncuestasForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasRow;
        (function (EncuestasRow) {
            EncuestasRow.idProperty = 'Id';
            EncuestasRow.nameProperty = 'Nombre';
            EncuestasRow.localTextPrefix = 'Contenidos.Encuestas';
        })(EncuestasRow = Contenidos.EncuestasRow || (Contenidos.EncuestasRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasService;
        (function (EncuestasService) {
            EncuestasService.baseUrl = 'Contenidos/Encuestas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EncuestasService[x] = function (r, s, o) {
                    return Q.serviceRequest(EncuestasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EncuestasService = Contenidos.EncuestasService || (Contenidos.EncuestasService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesForm = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesForm, _super);
            function EncuestasValoracionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EncuestasValoracionesForm.init) {
                    EncuestasValoracionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(EncuestasValoracionesForm, [
                        'IdEncuesta', w0,
                        'Fecha', w1,
                        'Valoracion', w0,
                        'Comentario', w2,
                        'Userid', w0
                    ]);
                }
                return _this;
            }
            EncuestasValoracionesForm.formKey = 'Contenidos.EncuestasValoraciones';
            return EncuestasValoracionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.EncuestasValoracionesForm = EncuestasValoracionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesRow;
        (function (EncuestasValoracionesRow) {
            EncuestasValoracionesRow.idProperty = 'Id';
            EncuestasValoracionesRow.nameProperty = 'Comentario';
            EncuestasValoracionesRow.localTextPrefix = 'Contenidos.EncuestasValoraciones';
        })(EncuestasValoracionesRow = Contenidos.EncuestasValoracionesRow || (Contenidos.EncuestasValoracionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesService;
        (function (EncuestasValoracionesService) {
            EncuestasValoracionesService.baseUrl = 'Contenidos/EncuestasValoraciones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EncuestasValoracionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EncuestasValoracionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EncuestasValoracionesService = Contenidos.EncuestasValoracionesService || (Contenidos.EncuestasValoracionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoForm = /** @class */ (function (_super) {
            __extends(LineaTiempoForm, _super);
            function LineaTiempoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LineaTiempoForm.init) {
                    LineaTiempoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(LineaTiempoForm, [
                        'Nombre', w0,
                        'ArchivoFilename', w0,
                        'ArchivoFilesize', w1,
                        'ArchivoContenttype', w0,
                        'ArchivoBinarydata', w0,
                        'Aprobado', w2,
                        'Mes', w1,
                        'Anio', w1,
                        'Periodo', w0,
                        'PeriodoFecha', w3,
                        'ContenidoTexto', w0,
                        'Userid', w1,
                        'IdCategoria', w1
                    ]);
                }
                return _this;
            }
            LineaTiempoForm.formKey = 'Contenidos.LineaTiempo';
            return LineaTiempoForm;
        }(Serenity.PrefixedContext));
        Contenidos.LineaTiempoForm = LineaTiempoForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoRow;
        (function (LineaTiempoRow) {
            LineaTiempoRow.idProperty = 'Id';
            LineaTiempoRow.nameProperty = 'Nombre';
            LineaTiempoRow.localTextPrefix = 'Contenidos.LineaTiempo';
        })(LineaTiempoRow = Contenidos.LineaTiempoRow || (Contenidos.LineaTiempoRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoService;
        (function (LineaTiempoService) {
            LineaTiempoService.baseUrl = 'Contenidos/LineaTiempo';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LineaTiempoService[x] = function (r, s, o) {
                    return Q.serviceRequest(LineaTiempoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LineaTiempoService = Contenidos.LineaTiempoService || (Contenidos.LineaTiempoService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresForm = /** @class */ (function (_super) {
            __extends(ProveedoresForm, _super);
            function ProveedoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProveedoresForm.init) {
                    ProveedoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(ProveedoresForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'FechaAlta', w2,
                        'FechaBaja', w2,
                        'Vigente', w3,
                        'Domicilio', w0,
                        'Telefonos', w0,
                        'Email', w0,
                        'Notas', w0,
                        'UserInsert', w4,
                        'DateInsert', w2,
                        'UserUpdate', w4,
                        'DateUpdate', w2
                    ]);
                }
                return _this;
            }
            ProveedoresForm.formKey = 'Contenidos.Proveedores';
            return ProveedoresForm;
        }(Serenity.PrefixedContext));
        Contenidos.ProveedoresForm = ProveedoresForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresRow;
        (function (ProveedoresRow) {
            ProveedoresRow.idProperty = 'Id';
            ProveedoresRow.nameProperty = 'Nombre';
            ProveedoresRow.localTextPrefix = 'Contenidos.Proveedores';
        })(ProveedoresRow = Contenidos.ProveedoresRow || (Contenidos.ProveedoresRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresService;
        (function (ProveedoresService) {
            ProveedoresService.baseUrl = 'Contenidos/Proveedores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProveedoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProveedoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProveedoresService = Contenidos.ProveedoresService || (Contenidos.ProveedoresService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesForm = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesForm, _super);
            function ProveedoresValoracionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProveedoresValoracionesForm.init) {
                    ProveedoresValoracionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(ProveedoresValoracionesForm, [
                        'IdProveedor', w0,
                        'Fecha', w1,
                        'Valoracion', w0,
                        'Userid', w0
                    ]);
                }
                return _this;
            }
            ProveedoresValoracionesForm.formKey = 'Contenidos.ProveedoresValoraciones';
            return ProveedoresValoracionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ProveedoresValoracionesForm = ProveedoresValoracionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesRow;
        (function (ProveedoresValoracionesRow) {
            ProveedoresValoracionesRow.idProperty = 'Id';
            ProveedoresValoracionesRow.localTextPrefix = 'Contenidos.ProveedoresValoraciones';
        })(ProveedoresValoracionesRow = Contenidos.ProveedoresValoracionesRow || (Contenidos.ProveedoresValoracionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesService;
        (function (ProveedoresValoracionesService) {
            ProveedoresValoracionesService.baseUrl = 'Contenidos/ProveedoresValoraciones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProveedoresValoracionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProveedoresValoracionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProveedoresValoracionesService = Contenidos.ProveedoresValoracionesService || (Contenidos.ProveedoresValoracionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasForm = /** @class */ (function (_super) {
            __extends(ReservasForm, _super);
            function ReservasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasForm.init) {
                    ReservasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(ReservasForm, [
                        'IdRecurso', w0,
                        'IdResultado', w0,
                        'Fecha', w1,
                        'Inicio', w0,
                        'Duracion', w0,
                        'Observaciones', w2,
                        'IdVecino2', w0,
                        'IdTipo', w0,
                        'FechaFin', w1,
                        'IdVecino', w0,
                        'DateInsert', w1,
                        'UserInsert', w0
                    ]);
                }
                return _this;
            }
            ReservasForm.formKey = 'Default.Reservas';
            return ReservasForm;
        }(Serenity.PrefixedContext));
        Default.ReservasForm = ReservasForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosForm = /** @class */ (function (_super) {
            __extends(ReservasRecursosForm, _super);
            function ReservasRecursosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasRecursosForm.init) {
                    ReservasRecursosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(ReservasRecursosForm, [
                        'Nombre', w0,
                        'Apertura', w1,
                        'Cierre', w1,
                        'Resolucion', w1
                    ]);
                }
                return _this;
            }
            ReservasRecursosForm.formKey = 'Default.ReservasRecursos';
            return ReservasRecursosForm;
        }(Serenity.PrefixedContext));
        Default.ReservasRecursosForm = ReservasRecursosForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosRow;
        (function (ReservasRecursosRow) {
            ReservasRecursosRow.idProperty = 'Id';
            ReservasRecursosRow.nameProperty = 'Nombre';
            ReservasRecursosRow.localTextPrefix = 'Default.ReservasRecursos';
        })(ReservasRecursosRow = Default.ReservasRecursosRow || (Default.ReservasRecursosRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosService;
        (function (ReservasRecursosService) {
            ReservasRecursosService.baseUrl = 'Default/ReservasRecursos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReservasRecursosService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasRecursosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasRecursosService = Default.ReservasRecursosService || (Default.ReservasRecursosService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRow;
        (function (ReservasRow) {
            ReservasRow.idProperty = 'Id';
            ReservasRow.nameProperty = 'Observaciones';
            ReservasRow.localTextPrefix = 'Default.Reservas';
        })(ReservasRow = Default.ReservasRow || (Default.ReservasRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasService;
        (function (ReservasService) {
            ReservasService.baseUrl = 'Default/Reservas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'renderBookingStatus'
            ].forEach(function (x) {
                ReservasService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasService = Default.ReservasService || (Default.ReservasService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposForm = /** @class */ (function (_super) {
            __extends(ReservasTiposForm, _super);
            function ReservasTiposForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasTiposForm.init) {
                    ReservasTiposForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ReservasTiposForm, [
                        'Id', w0,
                        'Nombre', w1,
                        'Duracion', w0,
                        'Vigente', w2,
                        'RequiereVecino2', w2
                    ]);
                }
                return _this;
            }
            ReservasTiposForm.formKey = 'Default.ReservasTipos';
            return ReservasTiposForm;
        }(Serenity.PrefixedContext));
        Default.ReservasTiposForm = ReservasTiposForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposRow;
        (function (ReservasTiposRow) {
            ReservasTiposRow.idProperty = 'IdRecurso';
            ReservasTiposRow.nameProperty = 'Nombre';
            ReservasTiposRow.localTextPrefix = 'Default.ReservasTipos';
        })(ReservasTiposRow = Default.ReservasTiposRow || (Default.ReservasTiposRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposService;
        (function (ReservasTiposService) {
            ReservasTiposService.baseUrl = 'Default/ReservasTipos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReservasTiposService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasTiposService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasTiposService = Default.ReservasTiposService || (Default.ReservasTiposService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesForm = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesForm, _super);
            function ReservasTurnosEspecialesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasTurnosEspecialesForm.init) {
                    ReservasTurnosEspecialesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(ReservasTurnosEspecialesForm, [
                        'Id', w0,
                        'Inicio', w0,
                        'Duracion', w0,
                        'Nombre', w1,
                        'Dias', w1
                    ]);
                }
                return _this;
            }
            ReservasTurnosEspecialesForm.formKey = 'Default.ReservasTurnosEspeciales';
            return ReservasTurnosEspecialesForm;
        }(Serenity.PrefixedContext));
        Default.ReservasTurnosEspecialesForm = ReservasTurnosEspecialesForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesRow;
        (function (ReservasTurnosEspecialesRow) {
            ReservasTurnosEspecialesRow.idProperty = 'IdRecurso';
            ReservasTurnosEspecialesRow.nameProperty = 'Nombre';
            ReservasTurnosEspecialesRow.localTextPrefix = 'Default.ReservasTurnosEspeciales';
        })(ReservasTurnosEspecialesRow = Default.ReservasTurnosEspecialesRow || (Default.ReservasTurnosEspecialesRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesService;
        (function (ReservasTurnosEspecialesService) {
            ReservasTurnosEspecialesService.baseUrl = 'Default/ReservasTurnosEspeciales';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReservasTurnosEspecialesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasTurnosEspecialesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasTurnosEspecialesService = Default.ReservasTurnosEspecialesService || (Default.ReservasTurnosEspecialesService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Modules;
    (function (Modules) {
        var Common;
        (function (Common) {
            var Utils;
            (function (Utils) {
                var GenericComboBoxRow;
                (function (GenericComboBoxRow) {
                    GenericComboBoxRow.idProperty = 'Id';
                    GenericComboBoxRow.nameProperty = 'Name';
                    GenericComboBoxRow.localTextPrefix = 'Modules.Common.Utils.GenericComboBox';
                })(GenericComboBoxRow = Utils.GenericComboBoxRow || (Utils.GenericComboBoxRow = {}));
            })(Utils = Common.Utils || (Common.Utils = {}));
        })(Common = Modules.Common || (Modules.Common = {}));
    })(Modules = Barrios.Modules || (Barrios.Modules = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios_1) {
    var Texts;
    (function (Texts) {
        Barrios['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Barrios: { Direccion: 1, Id: 1, IsActive: 1, Logo: 1, Nombre: 1, TelefonOs: 1, Url: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { ClientIdList: 1, DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 }, UsersBarrios: { BarrioId: 1, BarrioNombre: 1, UserId: 1, UserUsername: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Contenidos: { Avisos: { Caducidad: 1, DateInsert: 1, DateUpdate: 1, Descripcion: 1, Id: 1, IdCategoria: 1, IdCategoriaNombre: 1, Imagen: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, Categorias: { DateInsert: 1, DateUpdate: 1, Id: 1, Mostrar: 1, Nombre: 1, Type: 1, TypeName: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, Comisiones: { BarrioId: 1, BarrioNombre: 1, Color: 1, DateInsert: 1, DateUpdate: 1, Habilitada: 1, Id: 1, Mails: 1, Nombre: 1, Sigla: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1 }, ComisionesIntegrantes: { DateInsert: 1, DateUpdate: 1, Id: 1, IdComision: 1, IdComisionNombre: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1 }, Encuestas: { DateInsert: 1, DateUpdate: 1, Descripcion: 1, FechaAlta: 1, FechaBaja: 1, Id: 1, IdCategoria: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, EncuestasValoraciones: { Comentario: 1, Fecha: 1, Id: 1, IdEncuesta: 1, IdEncuestaNombre: 1, Userid: 1, UseridUsername: 1, Valoracion: 1 }, LineaTiempo: { Anio: 1, Aprobado: 1, ArchivoBinarydata: 1, ArchivoContenttype: 1, ArchivoFilename: 1, ArchivoFilesize: 1, ContenidoTexto: 1, Id: 1, IdCategoria: 1, Mes: 1, Nombre: 1, Periodo: 1, PeriodoFecha: 1, Userid: 1, UseridUsername: 1 }, Proveedores: { DateInsert: 1, DateUpdate: 1, Domicilio: 1, Email: 1, FechaAlta: 1, FechaBaja: 1, Id: 1, IdCategoria: 1, Nombre: 1, Notas: 1, Telefonos: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, ProveedoresValoraciones: { Fecha: 1, Id: 1, IdProveedor: 1, IdProveedorNombre: 1, Userid: 1, UseridUsername: 1, Valoracion: 1 } }, Default: { Reservas: { DateInsert: 1, Duracion: 1, Estado: 1, Estado_Turno: 1, Fecha: 1, FechaFin: 1, Finalizado: 1, Id: 1, IdRecurso: 1, IdRecursoApertura: 1, IdRecursoCierre: 1, IdRecursoNombre: 1, IdRecursoResolucion: 1, IdResultado: 1, IdTipo: 1, IdVecino: 1, IdVecino2: 1, IdVecinoDisplayName: 1, IdVecinoEmail: 1, IdVecinoInsertDate: 1, IdVecinoInsertUserId: 1, IdVecinoIsActive: 1, IdVecinoLastDirectoryUpdate: 1, IdVecinoLatestAccess: 1, IdVecinoNote: 1, IdVecinoPasswordHash: 1, IdVecinoPasswordSalt: 1, IdVecinoPhones: 1, IdVecinoSource: 1, IdVecinoUnidad: 1, IdVecinoUnidadExtra: 1, IdVecinoUpdateDate: 1, IdVecinoUpdateUserId: 1, IdVecinoUserImage: 1, IdVecinoUsername: 1, Inicio: 1, Observaciones: 1, Required_Vecino: 1, Reservable: 1, Tipo: 1, Turno: 1, UserInsert: 1, Valido: 1 }, ReservasRecursos: { Apertura: 1, BarrioId: 1, Cierre: 1, Id: 1, Nombre: 1, Resolucion: 1 }, ReservasTipos: { Duracion: 1, Id: 1, IdRecurso: 1, Nombre: 1, RequiereVecino2: 1, Vigente: 1 }, ReservasTurnosEspeciales: { Dias: 1, Duracion: 1, Id: 1, IdRecurso: 1, Inicio: 1, Nombre: 1 } }, Modules: { Common: { Utils: { GenericComboBox: { Id: 1, Name: 1 } } } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Barrios_1.Texts || (Barrios_1.Texts = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosDialog = /** @class */ (function (_super) {
            __extends(BarriosDialog, _super);
            function BarriosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.BarriosForm(_this.idPrefix);
                return _this;
            }
            BarriosDialog.prototype.getFormKey = function () { return Administration.BarriosForm.formKey; };
            BarriosDialog.prototype.getIdProperty = function () { return Administration.BarriosRow.idProperty; };
            BarriosDialog.prototype.getLocalTextPrefix = function () { return Administration.BarriosRow.localTextPrefix; };
            BarriosDialog.prototype.getNameProperty = function () { return Administration.BarriosRow.nameProperty; };
            BarriosDialog.prototype.getService = function () { return Administration.BarriosService.baseUrl; };
            BarriosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BarriosDialog);
            return BarriosDialog;
        }(Serenity.EntityDialog));
        Administration.BarriosDialog = BarriosDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosGrid = /** @class */ (function (_super) {
            __extends(BarriosGrid, _super);
            function BarriosGrid(container) {
                return _super.call(this, container) || this;
            }
            BarriosGrid.prototype.getColumnsKey = function () { return 'Administration.Barrios'; };
            BarriosGrid.prototype.getDialogType = function () { return Administration.BarriosDialog; };
            BarriosGrid.prototype.getIdProperty = function () { return Administration.BarriosRow.idProperty; };
            BarriosGrid.prototype.getLocalTextPrefix = function () { return Administration.BarriosRow.localTextPrefix; };
            BarriosGrid.prototype.getService = function () { return Administration.BarriosService.baseUrl; };
            BarriosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BarriosGrid);
            return BarriosGrid;
        }(Serenity.EntityGrid));
        Administration.BarriosGrid = BarriosGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Barrios.Authorization || (Barrios.Authorization = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UsersBarriosDialog = /** @class */ (function (_super) {
            __extends(UsersBarriosDialog, _super);
            function UsersBarriosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.UsersBarriosForm(_this.idPrefix);
                return _this;
            }
            UsersBarriosDialog.prototype.getFormKey = function () { return Administration.UsersBarriosForm.formKey; };
            UsersBarriosDialog.prototype.getIdProperty = function () { return Administration.UsersBarriosRow.idProperty; };
            UsersBarriosDialog.prototype.getLocalTextPrefix = function () { return Administration.UsersBarriosRow.localTextPrefix; };
            UsersBarriosDialog.prototype.getService = function () { return UsersBarriosService.baseUrl; };
            UsersBarriosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UsersBarriosDialog);
            return UsersBarriosDialog;
        }(Serenity.EntityDialog));
        Administration.UsersBarriosDialog = UsersBarriosDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UsersBarriosGrid = /** @class */ (function (_super) {
            __extends(UsersBarriosGrid, _super);
            function UsersBarriosGrid(container) {
                return _super.call(this, container) || this;
            }
            UsersBarriosGrid.prototype.getColumnsKey = function () { return 'Administration.UsersBarrios'; };
            UsersBarriosGrid.prototype.getDialogType = function () { return Administration.UsersBarriosDialog; };
            UsersBarriosGrid.prototype.getIdProperty = function () { return Administration.UsersBarriosRow.idProperty; };
            UsersBarriosGrid.prototype.getLocalTextPrefix = function () { return Administration.UsersBarriosRow.localTextPrefix; };
            UsersBarriosGrid.prototype.getService = function () { return UsersBarriosService.baseUrl; };
            UsersBarriosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UsersBarriosGrid);
            return UsersBarriosGrid;
        }(Serenity.EntityGrid));
        Administration.UsersBarriosGrid = UsersBarriosGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Barrios.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Barrios.LanguageList || (Barrios.LanguageList = {}));
})(Barrios || (Barrios = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Barrios;
(function (Barrios) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Barrios');
        Serenity.EntityDialog.defaultLanguageList = Barrios.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Barrios.ScriptInitialization || (Barrios.ScriptInitialization = {}));
})(Barrios || (Barrios = {}));
/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference path="../../../Imports/ServerTypings/Default.ReservasService.ts" />
var Dashboard;
(function (Dashboard) {
    var Booking = /** @class */ (function () {
        function Booking(resource, items, table) {
            this._resource = resource;
            var obj = this;
            this._table = table;
            items.click(function () { obj.selectItem($(this)); });
        }
        Booking.prototype.selectItem = function (item) {
            var obj = this;
            Barrios.Default.ReservasService.renderBookingStatus({ Id: item.attr("ID") }, function (response) {
                console.log(response);
                obj._table.html($.parseHTML(response));
            });
            this._resource.text(item.text());
        };
        Booking.prototype.bookingsTake = function (element, resourceId, date, start, type, neighbour) {
            console.log(element);
        };
        return Booking;
    }());
    Dashboard.Booking = Booking;
})(Dashboard || (Dashboard = {}));
var Barrios;
(function (Barrios) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Barrios.BasicProgressDialog = BasicProgressDialog;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Barrios.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Barrios.DialogUtils || (Barrios.DialogUtils = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Barrios.StaticTextBlock = StaticTextBlock;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosDialog = /** @class */ (function (_super) {
            __extends(AvisosDialog, _super);
            function AvisosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.AvisosForm(_this.idPrefix);
                return _this;
            }
            AvisosDialog.prototype.getFormKey = function () { return Contenidos.AvisosForm.formKey; };
            AvisosDialog.prototype.getIdProperty = function () { return Contenidos.AvisosRow.idProperty; };
            AvisosDialog.prototype.getLocalTextPrefix = function () { return Contenidos.AvisosRow.localTextPrefix; };
            AvisosDialog.prototype.getNameProperty = function () { return Contenidos.AvisosRow.nameProperty; };
            AvisosDialog.prototype.getService = function () { return Contenidos.AvisosService.baseUrl; };
            AvisosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvisosDialog);
            return AvisosDialog;
        }(Serenity.EntityDialog));
        Contenidos.AvisosDialog = AvisosDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosGrid = /** @class */ (function (_super) {
            __extends(AvisosGrid, _super);
            function AvisosGrid(container) {
                return _super.call(this, container) || this;
            }
            AvisosGrid.prototype.getColumnsKey = function () { return 'Contenidos.Avisos'; };
            AvisosGrid.prototype.getDialogType = function () { return Contenidos.AvisosDialog; };
            AvisosGrid.prototype.getIdProperty = function () { return Contenidos.AvisosRow.idProperty; };
            AvisosGrid.prototype.getLocalTextPrefix = function () { return Contenidos.AvisosRow.localTextPrefix; };
            AvisosGrid.prototype.getService = function () { return Contenidos.AvisosService.baseUrl; };
            AvisosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvisosGrid);
            return AvisosGrid;
        }(Serenity.EntityGrid));
        Contenidos.AvisosGrid = AvisosGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasDialog = /** @class */ (function (_super) {
            __extends(CategoriasDialog, _super);
            function CategoriasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.CategoriasForm(_this.idPrefix);
                return _this;
            }
            CategoriasDialog.prototype.getFormKey = function () { return Contenidos.CategoriasForm.formKey; };
            CategoriasDialog.prototype.getIdProperty = function () { return Contenidos.CategoriasRow.idProperty; };
            CategoriasDialog.prototype.getLocalTextPrefix = function () { return Contenidos.CategoriasRow.localTextPrefix; };
            CategoriasDialog.prototype.getNameProperty = function () { return Contenidos.CategoriasRow.nameProperty; };
            CategoriasDialog.prototype.getService = function () { return Contenidos.CategoriasService.baseUrl; };
            CategoriasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriasDialog);
            return CategoriasDialog;
        }(Serenity.EntityDialog));
        Contenidos.CategoriasDialog = CategoriasDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasGrid = /** @class */ (function (_super) {
            __extends(CategoriasGrid, _super);
            function CategoriasGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriasGrid.prototype.getColumnsKey = function () { return 'Contenidos.Categorias'; };
            CategoriasGrid.prototype.getDialogType = function () { return Contenidos.CategoriasDialog; };
            CategoriasGrid.prototype.getIdProperty = function () { return Contenidos.CategoriasRow.idProperty; };
            CategoriasGrid.prototype.getLocalTextPrefix = function () { return Contenidos.CategoriasRow.localTextPrefix; };
            CategoriasGrid.prototype.getService = function () { return Contenidos.CategoriasService.baseUrl; };
            CategoriasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriasGrid);
            return CategoriasGrid;
        }(Serenity.EntityGrid));
        Contenidos.CategoriasGrid = CategoriasGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesDialog = /** @class */ (function (_super) {
            __extends(ComisionesDialog, _super);
            function ComisionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ComisionesForm(_this.idPrefix);
                return _this;
            }
            ComisionesDialog.prototype.getFormKey = function () { return Contenidos.ComisionesForm.formKey; };
            ComisionesDialog.prototype.getIdProperty = function () { return Contenidos.ComisionesRow.idProperty; };
            ComisionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesRow.localTextPrefix; };
            ComisionesDialog.prototype.getNameProperty = function () { return Contenidos.ComisionesRow.nameProperty; };
            ComisionesDialog.prototype.getService = function () { return Contenidos.ComisionesService.baseUrl; };
            ComisionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesDialog);
            return ComisionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.ComisionesDialog = ComisionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesGrid = /** @class */ (function (_super) {
            __extends(ComisionesGrid, _super);
            function ComisionesGrid(container) {
                return _super.call(this, container) || this;
            }
            ComisionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.Comisiones'; };
            ComisionesGrid.prototype.getDialogType = function () { return Contenidos.ComisionesDialog; };
            ComisionesGrid.prototype.getIdProperty = function () { return Contenidos.ComisionesRow.idProperty; };
            ComisionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesRow.localTextPrefix; };
            ComisionesGrid.prototype.getService = function () { return Contenidos.ComisionesService.baseUrl; };
            ComisionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesGrid);
            return ComisionesGrid;
        }(Serenity.EntityGrid));
        Contenidos.ComisionesGrid = ComisionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesDialog = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesDialog, _super);
            function ComisionesIntegrantesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ComisionesIntegrantesForm(_this.idPrefix);
                return _this;
            }
            ComisionesIntegrantesDialog.prototype.getFormKey = function () { return Contenidos.ComisionesIntegrantesForm.formKey; };
            ComisionesIntegrantesDialog.prototype.getIdProperty = function () { return Contenidos.ComisionesIntegrantesRow.idProperty; };
            ComisionesIntegrantesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesIntegrantesRow.localTextPrefix; };
            ComisionesIntegrantesDialog.prototype.getNameProperty = function () { return Contenidos.ComisionesIntegrantesRow.nameProperty; };
            ComisionesIntegrantesDialog.prototype.getService = function () { return Contenidos.ComisionesIntegrantesService.baseUrl; };
            ComisionesIntegrantesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesIntegrantesDialog);
            return ComisionesIntegrantesDialog;
        }(Serenity.EntityDialog));
        Contenidos.ComisionesIntegrantesDialog = ComisionesIntegrantesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesGrid = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesGrid, _super);
            function ComisionesIntegrantesGrid(container) {
                return _super.call(this, container) || this;
            }
            ComisionesIntegrantesGrid.prototype.getColumnsKey = function () { return 'Contenidos.ComisionesIntegrantes'; };
            ComisionesIntegrantesGrid.prototype.getDialogType = function () { return Contenidos.ComisionesIntegrantesDialog; };
            ComisionesIntegrantesGrid.prototype.getIdProperty = function () { return Contenidos.ComisionesIntegrantesRow.idProperty; };
            ComisionesIntegrantesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesIntegrantesRow.localTextPrefix; };
            ComisionesIntegrantesGrid.prototype.getService = function () { return Contenidos.ComisionesIntegrantesService.baseUrl; };
            ComisionesIntegrantesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesIntegrantesGrid);
            return ComisionesIntegrantesGrid;
        }(Serenity.EntityGrid));
        Contenidos.ComisionesIntegrantesGrid = ComisionesIntegrantesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasDialog = /** @class */ (function (_super) {
            __extends(EncuestasDialog, _super);
            function EncuestasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.EncuestasForm(_this.idPrefix);
                return _this;
            }
            EncuestasDialog.prototype.getFormKey = function () { return Contenidos.EncuestasForm.formKey; };
            EncuestasDialog.prototype.getIdProperty = function () { return Contenidos.EncuestasRow.idProperty; };
            EncuestasDialog.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasRow.localTextPrefix; };
            EncuestasDialog.prototype.getNameProperty = function () { return Contenidos.EncuestasRow.nameProperty; };
            EncuestasDialog.prototype.getService = function () { return Contenidos.EncuestasService.baseUrl; };
            EncuestasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasDialog);
            return EncuestasDialog;
        }(Serenity.EntityDialog));
        Contenidos.EncuestasDialog = EncuestasDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasGrid = /** @class */ (function (_super) {
            __extends(EncuestasGrid, _super);
            function EncuestasGrid(container) {
                return _super.call(this, container) || this;
            }
            EncuestasGrid.prototype.getColumnsKey = function () { return 'Contenidos.Encuestas'; };
            EncuestasGrid.prototype.getDialogType = function () { return Contenidos.EncuestasDialog; };
            EncuestasGrid.prototype.getIdProperty = function () { return Contenidos.EncuestasRow.idProperty; };
            EncuestasGrid.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasRow.localTextPrefix; };
            EncuestasGrid.prototype.getService = function () { return Contenidos.EncuestasService.baseUrl; };
            EncuestasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasGrid);
            return EncuestasGrid;
        }(Serenity.EntityGrid));
        Contenidos.EncuestasGrid = EncuestasGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesDialog = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesDialog, _super);
            function EncuestasValoracionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.EncuestasValoracionesForm(_this.idPrefix);
                return _this;
            }
            EncuestasValoracionesDialog.prototype.getFormKey = function () { return Contenidos.EncuestasValoracionesForm.formKey; };
            EncuestasValoracionesDialog.prototype.getIdProperty = function () { return Contenidos.EncuestasValoracionesRow.idProperty; };
            EncuestasValoracionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasValoracionesRow.localTextPrefix; };
            EncuestasValoracionesDialog.prototype.getNameProperty = function () { return Contenidos.EncuestasValoracionesRow.nameProperty; };
            EncuestasValoracionesDialog.prototype.getService = function () { return Contenidos.EncuestasValoracionesService.baseUrl; };
            EncuestasValoracionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasValoracionesDialog);
            return EncuestasValoracionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.EncuestasValoracionesDialog = EncuestasValoracionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesGrid = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesGrid, _super);
            function EncuestasValoracionesGrid(container) {
                return _super.call(this, container) || this;
            }
            EncuestasValoracionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.EncuestasValoraciones'; };
            EncuestasValoracionesGrid.prototype.getDialogType = function () { return Contenidos.EncuestasValoracionesDialog; };
            EncuestasValoracionesGrid.prototype.getIdProperty = function () { return Contenidos.EncuestasValoracionesRow.idProperty; };
            EncuestasValoracionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasValoracionesRow.localTextPrefix; };
            EncuestasValoracionesGrid.prototype.getService = function () { return Contenidos.EncuestasValoracionesService.baseUrl; };
            EncuestasValoracionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasValoracionesGrid);
            return EncuestasValoracionesGrid;
        }(Serenity.EntityGrid));
        Contenidos.EncuestasValoracionesGrid = EncuestasValoracionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoDialog = /** @class */ (function (_super) {
            __extends(LineaTiempoDialog, _super);
            function LineaTiempoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.LineaTiempoForm(_this.idPrefix);
                return _this;
            }
            LineaTiempoDialog.prototype.getFormKey = function () { return Contenidos.LineaTiempoForm.formKey; };
            LineaTiempoDialog.prototype.getIdProperty = function () { return Contenidos.LineaTiempoRow.idProperty; };
            LineaTiempoDialog.prototype.getLocalTextPrefix = function () { return Contenidos.LineaTiempoRow.localTextPrefix; };
            LineaTiempoDialog.prototype.getNameProperty = function () { return Contenidos.LineaTiempoRow.nameProperty; };
            LineaTiempoDialog.prototype.getService = function () { return Contenidos.LineaTiempoService.baseUrl; };
            LineaTiempoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LineaTiempoDialog);
            return LineaTiempoDialog;
        }(Serenity.EntityDialog));
        Contenidos.LineaTiempoDialog = LineaTiempoDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoGrid = /** @class */ (function (_super) {
            __extends(LineaTiempoGrid, _super);
            function LineaTiempoGrid(container) {
                return _super.call(this, container) || this;
            }
            LineaTiempoGrid.prototype.getColumnsKey = function () { return 'Contenidos.LineaTiempo'; };
            LineaTiempoGrid.prototype.getDialogType = function () { return Contenidos.LineaTiempoDialog; };
            LineaTiempoGrid.prototype.getIdProperty = function () { return Contenidos.LineaTiempoRow.idProperty; };
            LineaTiempoGrid.prototype.getLocalTextPrefix = function () { return Contenidos.LineaTiempoRow.localTextPrefix; };
            LineaTiempoGrid.prototype.getService = function () { return Contenidos.LineaTiempoService.baseUrl; };
            LineaTiempoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LineaTiempoGrid);
            return LineaTiempoGrid;
        }(Serenity.EntityGrid));
        Contenidos.LineaTiempoGrid = LineaTiempoGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresDialog = /** @class */ (function (_super) {
            __extends(ProveedoresDialog, _super);
            function ProveedoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ProveedoresForm(_this.idPrefix);
                return _this;
            }
            ProveedoresDialog.prototype.getFormKey = function () { return Contenidos.ProveedoresForm.formKey; };
            ProveedoresDialog.prototype.getIdProperty = function () { return Contenidos.ProveedoresRow.idProperty; };
            ProveedoresDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresRow.localTextPrefix; };
            ProveedoresDialog.prototype.getNameProperty = function () { return Contenidos.ProveedoresRow.nameProperty; };
            ProveedoresDialog.prototype.getService = function () { return Contenidos.ProveedoresService.baseUrl; };
            ProveedoresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresDialog);
            return ProveedoresDialog;
        }(Serenity.EntityDialog));
        Contenidos.ProveedoresDialog = ProveedoresDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresGrid = /** @class */ (function (_super) {
            __extends(ProveedoresGrid, _super);
            function ProveedoresGrid(container) {
                return _super.call(this, container) || this;
            }
            ProveedoresGrid.prototype.getColumnsKey = function () { return 'Contenidos.Proveedores'; };
            ProveedoresGrid.prototype.getDialogType = function () { return Contenidos.ProveedoresDialog; };
            ProveedoresGrid.prototype.getIdProperty = function () { return Contenidos.ProveedoresRow.idProperty; };
            ProveedoresGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresRow.localTextPrefix; };
            ProveedoresGrid.prototype.getService = function () { return Contenidos.ProveedoresService.baseUrl; };
            ProveedoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresGrid);
            return ProveedoresGrid;
        }(Serenity.EntityGrid));
        Contenidos.ProveedoresGrid = ProveedoresGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesDialog = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesDialog, _super);
            function ProveedoresValoracionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ProveedoresValoracionesForm(_this.idPrefix);
                return _this;
            }
            ProveedoresValoracionesDialog.prototype.getFormKey = function () { return Contenidos.ProveedoresValoracionesForm.formKey; };
            ProveedoresValoracionesDialog.prototype.getIdProperty = function () { return Contenidos.ProveedoresValoracionesRow.idProperty; };
            ProveedoresValoracionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresValoracionesRow.localTextPrefix; };
            ProveedoresValoracionesDialog.prototype.getService = function () { return Contenidos.ProveedoresValoracionesService.baseUrl; };
            ProveedoresValoracionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresValoracionesDialog);
            return ProveedoresValoracionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.ProveedoresValoracionesDialog = ProveedoresValoracionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesGrid = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesGrid, _super);
            function ProveedoresValoracionesGrid(container) {
                return _super.call(this, container) || this;
            }
            ProveedoresValoracionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.ProveedoresValoraciones'; };
            ProveedoresValoracionesGrid.prototype.getDialogType = function () { return Contenidos.ProveedoresValoracionesDialog; };
            ProveedoresValoracionesGrid.prototype.getIdProperty = function () { return Contenidos.ProveedoresValoracionesRow.idProperty; };
            ProveedoresValoracionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresValoracionesRow.localTextPrefix; };
            ProveedoresValoracionesGrid.prototype.getService = function () { return Contenidos.ProveedoresValoracionesService.baseUrl; };
            ProveedoresValoracionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresValoracionesGrid);
            return ProveedoresValoracionesGrid;
        }(Serenity.EntityGrid));
        Contenidos.ProveedoresValoracionesGrid = ProveedoresValoracionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasDialog = /** @class */ (function (_super) {
            __extends(ReservasDialog, _super);
            function ReservasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ReservasForm(_this.idPrefix);
                return _this;
            }
            ReservasDialog.prototype.getFormKey = function () { return Default.ReservasForm.formKey; };
            ReservasDialog.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            ReservasDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            ReservasDialog.prototype.getNameProperty = function () { return Default.ReservasRow.nameProperty; };
            ReservasDialog.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            ReservasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasDialog);
            return ReservasDialog;
        }(Serenity.EntityDialog));
        Default.ReservasDialog = ReservasDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasGrid = /** @class */ (function (_super) {
            __extends(ReservasGrid, _super);
            function ReservasGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasGrid.prototype.getColumnsKey = function () { return 'Default.Reservas'; };
            ReservasGrid.prototype.getDialogType = function () { return Default.ReservasDialog; };
            ReservasGrid.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            ReservasGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            ReservasGrid.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            ReservasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasGrid);
            return ReservasGrid;
        }(Serenity.EntityGrid));
        Default.ReservasGrid = ReservasGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosDialog = /** @class */ (function (_super) {
            __extends(ReservasRecursosDialog, _super);
            function ReservasRecursosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ReservasRecursosForm(_this.idPrefix);
                return _this;
            }
            ReservasRecursosDialog.prototype.getFormKey = function () { return Default.ReservasRecursosForm.formKey; };
            ReservasRecursosDialog.prototype.getIdProperty = function () { return Default.ReservasRecursosRow.idProperty; };
            ReservasRecursosDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRecursosRow.localTextPrefix; };
            ReservasRecursosDialog.prototype.getNameProperty = function () { return Default.ReservasRecursosRow.nameProperty; };
            ReservasRecursosDialog.prototype.getService = function () { return Default.ReservasRecursosService.baseUrl; };
            ReservasRecursosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecursosDialog);
            return ReservasRecursosDialog;
        }(Serenity.EntityDialog));
        Default.ReservasRecursosDialog = ReservasRecursosDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosGrid = /** @class */ (function (_super) {
            __extends(ReservasRecursosGrid, _super);
            function ReservasRecursosGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasRecursosGrid.prototype.getColumnsKey = function () { return 'Default.ReservasRecursos'; };
            ReservasRecursosGrid.prototype.getDialogType = function () { return Default.ReservasRecursosDialog; };
            ReservasRecursosGrid.prototype.getIdProperty = function () { return Default.ReservasRecursosRow.idProperty; };
            ReservasRecursosGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasRecursosRow.localTextPrefix; };
            ReservasRecursosGrid.prototype.getService = function () { return Default.ReservasRecursosService.baseUrl; };
            ReservasRecursosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecursosGrid);
            return ReservasRecursosGrid;
        }(Serenity.EntityGrid));
        Default.ReservasRecursosGrid = ReservasRecursosGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposDialog = /** @class */ (function (_super) {
            __extends(ReservasTiposDialog, _super);
            function ReservasTiposDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ReservasTiposForm(_this.idPrefix);
                return _this;
            }
            ReservasTiposDialog.prototype.getFormKey = function () { return Default.ReservasTiposForm.formKey; };
            ReservasTiposDialog.prototype.getIdProperty = function () { return Default.ReservasTiposRow.idProperty; };
            ReservasTiposDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasTiposRow.localTextPrefix; };
            ReservasTiposDialog.prototype.getNameProperty = function () { return Default.ReservasTiposRow.nameProperty; };
            ReservasTiposDialog.prototype.getService = function () { return Default.ReservasTiposService.baseUrl; };
            ReservasTiposDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTiposDialog);
            return ReservasTiposDialog;
        }(Serenity.EntityDialog));
        Default.ReservasTiposDialog = ReservasTiposDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposGrid = /** @class */ (function (_super) {
            __extends(ReservasTiposGrid, _super);
            function ReservasTiposGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasTiposGrid.prototype.getColumnsKey = function () { return 'Default.ReservasTipos'; };
            ReservasTiposGrid.prototype.getDialogType = function () { return Default.ReservasTiposDialog; };
            ReservasTiposGrid.prototype.getIdProperty = function () { return Default.ReservasTiposRow.idProperty; };
            ReservasTiposGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasTiposRow.localTextPrefix; };
            ReservasTiposGrid.prototype.getService = function () { return Default.ReservasTiposService.baseUrl; };
            ReservasTiposGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTiposGrid);
            return ReservasTiposGrid;
        }(Serenity.EntityGrid));
        Default.ReservasTiposGrid = ReservasTiposGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesDialog = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesDialog, _super);
            function ReservasTurnosEspecialesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ReservasTurnosEspecialesForm(_this.idPrefix);
                return _this;
            }
            ReservasTurnosEspecialesDialog.prototype.getFormKey = function () { return Default.ReservasTurnosEspecialesForm.formKey; };
            ReservasTurnosEspecialesDialog.prototype.getIdProperty = function () { return Default.ReservasTurnosEspecialesRow.idProperty; };
            ReservasTurnosEspecialesDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasTurnosEspecialesRow.localTextPrefix; };
            ReservasTurnosEspecialesDialog.prototype.getNameProperty = function () { return Default.ReservasTurnosEspecialesRow.nameProperty; };
            ReservasTurnosEspecialesDialog.prototype.getService = function () { return Default.ReservasTurnosEspecialesService.baseUrl; };
            ReservasTurnosEspecialesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTurnosEspecialesDialog);
            return ReservasTurnosEspecialesDialog;
        }(Serenity.EntityDialog));
        Default.ReservasTurnosEspecialesDialog = ReservasTurnosEspecialesDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesGrid = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesGrid, _super);
            function ReservasTurnosEspecialesGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasTurnosEspecialesGrid.prototype.getColumnsKey = function () { return 'Default.ReservasTurnosEspeciales'; };
            ReservasTurnosEspecialesGrid.prototype.getDialogType = function () { return Default.ReservasTurnosEspecialesDialog; };
            ReservasTurnosEspecialesGrid.prototype.getIdProperty = function () { return Default.ReservasTurnosEspecialesRow.idProperty; };
            ReservasTurnosEspecialesGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasTurnosEspecialesRow.localTextPrefix; };
            ReservasTurnosEspecialesGrid.prototype.getService = function () { return Default.ReservasTurnosEspecialesService.baseUrl; };
            ReservasTurnosEspecialesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTurnosEspecialesGrid);
            return ReservasTurnosEspecialesGrid;
        }(Serenity.EntityGrid));
        Default.ReservasTurnosEspecialesGrid = ReservasTurnosEspecialesGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
//# sourceMappingURL=Barrios.Web.js.map
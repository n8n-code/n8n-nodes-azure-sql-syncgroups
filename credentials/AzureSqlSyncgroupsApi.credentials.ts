import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlSyncgroupsApi implements ICredentialType {
        name = 'N8nDevAzureSqlSyncgroupsApi';

        displayName = 'Azure SQL Syncgroups API';

        icon: Icon = { light: 'file:../nodes/AzureSqlSyncgroups/azure-sql-syncgroups.png', dark: 'file:../nodes/AzureSqlSyncgroups/azure-sql-syncgroups.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Syncgroups API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

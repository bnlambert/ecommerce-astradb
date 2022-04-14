package com.boyonglab.ecommerce;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.ResultSet;
import com.datastax.oss.driver.api.core.cql.Row;
import java.nio.file.Paths;

public class AstraDBConnector {
    private CqlSession session;

    public void connect() {
        try ( CqlSession session = CqlSession.builder()
           .withCloudSecureConnectBundle(Paths.get("../resources/secure-connect-build-a-thon2.zip"))
           .withAuthCredentials("PuRpUmTyBZBXcUjZKCLyIaFP", "-u-ZYxjGetF6J9__Clu.BGzhElOqPgRYC_bPvt8dYMNCiN2FbKZ4e+rMUCZJ3abYnXZMChv,ZwpIy1CN1WT-uoxpDaFpYQLZ,U93dgt_hYzb0obfHE.FRK6-5MyMyN1p")
           .build()) {
           // Select the release_version from the system.local table:
           ResultSet rs = session.execute("select release_version from system.local");
           Row row = rs.one();
           //Print the results of the CQL query to the console:
           if (row != null) {
               System.out.println(row.getString("release_version"));
           } else {
               System.out.println("An error occurred.");
           }
       }
    }

    public CqlSession getSession() {
        return this.session;
    }

    public void close() {
        session.close();
    }
}
